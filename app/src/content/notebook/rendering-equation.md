---
title: The rendering equation
date: 2026-06-12
summary: "A long test piece: light transport from first principles, from radiance and the BRDF to the Monte Carlo estimator a path tracer actually runs."
tags: [graphics, math, rendering]
---

Almost all of physically based rendering is one equation, written down by Kajiya
in 1986, and a great deal of cleverness spent *not* solving it exactly. It is an
integral equation: the unknown, outgoing light, appears on both sides, once
outside an integral and once buried inside it. Everything from a path tracer to a
real-time global-illumination probe is an approximation to the same expression.

This note builds it up term by term, then turns it into the estimator a renderer
actually evaluates.

## Radiometry: what we solve for

The quantity of interest is **radiance**, $L$: power per unit projected area per
unit solid angle, measured in $\mathrm{W}\,\mathrm{m}^{-2}\,\mathrm{sr}^{-1}$.
Radiance is the right unknown because it is *constant along a ray* in a vacuum and
it is exactly what a pixel integrates. Formally,

$$
L(\mathbf{x}, \omega) = \frac{\mathrm{d}^2\Phi}{\mathrm{d}A^{\perp}\,\mathrm{d}\omega}
= \frac{\mathrm{d}^2\Phi}{\cos\theta\,\mathrm{d}A\,\mathrm{d}\omega},
$$

where $\Phi$ is radiant flux, $\mathrm{d}A^{\perp}$ is area projected perpendicular
to $\omega$, and $\theta$ is the angle between $\omega$ and the surface normal
$\mathbf{n}$. Irradiance, flux *arriving* per unit area, is radiance gathered
over the hemisphere:

$$
E(\mathbf{x}) = \int_{\Omega} L_i(\mathbf{x}, \omega_i)\,\cos\theta_i \,\mathrm{d}\omega_i .
$$

The two radiometric quantities worth keeping straight:

- **Radiance** $L$: directional, conserved along a ray, what we trace.
- **Irradiance** $E$: the cosine-weighted integral of incoming radiance; what a
  diffuse surface "feels."

## The equation

Outgoing radiance from a point $\mathbf{x}$ in direction $\omega_o$ is what the
surface *emits* plus what it *reflects*:

$$
L_o(\mathbf{x}, \omega_o) = L_e(\mathbf{x}, \omega_o)
  + \int_{\Omega} f_r(\mathbf{x}, \omega_i, \omega_o)\,
    L_i(\mathbf{x}, \omega_i)\,(\omega_i \cdot \mathbf{n})\,\mathrm{d}\omega_i .
$$

Read it left to right: $L_e$ is emission (zero unless $\mathbf{x}$ is a light);
the integral sweeps every incoming direction $\omega_i$ over the hemisphere
$\Omega$; $f_r$ is the **BRDF**; $L_i$ is the incoming radiance from $\omega_i$;
and $(\omega_i \cdot \mathbf{n}) = \cos\theta_i$ is the foreshortening cosine. The
recursion hides in $L_i$: the light arriving along $\omega_i$ is itself the
outgoing radiance of *another* point, so `L_i` is `L_o` evaluated elsewhere.

> The equation is a fixed point: light is the thing that, when you reflect it off
> the whole scene and add the emitters, gives back itself. Rendering is finding
> that fixed point.

## The BRDF

The **bidirectional reflectance distribution function** is the surface's entire
optical character: the ratio of reflected radiance in $\omega_o$ to the
irradiance arriving from $\omega_i$:

$$
f_r(\mathbf{x}, \omega_i, \omega_o)
  = \frac{\mathrm{d}L_o(\mathbf{x}, \omega_o)}{\mathrm{d}E(\mathbf{x}, \omega_i)}
  = \frac{\mathrm{d}L_o(\mathbf{x}, \omega_o)}{L_i(\mathbf{x}, \omega_i)\,\cos\theta_i\,\mathrm{d}\omega_i}.
$$

A physically valid BRDF obeys two constraints:

$$
\begin{aligned}
f_r(\mathbf{x}, \omega_i, \omega_o) &= f_r(\mathbf{x}, \omega_o, \omega_i)
  && \text{(Helmholtz reciprocity)} \\[2pt]
\int_{\Omega} f_r(\mathbf{x}, \omega_i, \omega_o)\,\cos\theta_o\,\mathrm{d}\omega_o
  &\le 1 && \text{(energy conservation)}.
\end{aligned}
$$

The simplest case is the **Lambertian** (ideal diffuse) surface, whose BRDF is a
constant: the albedo $\rho$ spread evenly over the hemisphere:

$$
f_r^{\text{Lambert}} = \frac{\rho}{\pi}, \qquad 0 \le \rho \le 1 .
$$

The $\pi$ is not decoration: it is exactly the normalizing constant that makes a
white ($\rho = 1$) surface conserve energy, since
$\int_{\Omega}\cos\theta\,\mathrm{d}\omega = \pi$.

## The hemisphere and the solid-angle measure

To evaluate the integral we parameterize directions by spherical coordinates
$(\theta, \phi)$ about the normal. The differential solid angle is

$$
\mathrm{d}\omega = \sin\theta\,\mathrm{d}\theta\,\mathrm{d}\phi ,
$$

so the hemisphere has total measure $\int_0^{2\pi}\!\!\int_0^{\pi/2}\sin\theta
\,\mathrm{d}\theta\,\mathrm{d}\phi = 2\pi$, and the cosine-weighted measure
integrates to $\pi$ as used above. A direction lifts to a Cartesian vector by

$$
\omega(\theta, \phi) =
\begin{pmatrix} \sin\theta\cos\phi \\ \sin\theta\sin\phi \\ \cos\theta \end{pmatrix}.
$$

## The three-point form

Switching the integral from directions to *surface points* makes the recursion
explicit. Let $\mathcal{M}$ be all scene surfaces; integrate over points
$\mathbf{x}_i$ rather than directions $\omega_i$:

$$
L(\mathbf{x} \to \mathbf{x}_o) = L_e(\mathbf{x} \to \mathbf{x}_o)
  + \int_{\mathcal{M}} f_r(\mathbf{x}_i \to \mathbf{x} \to \mathbf{x}_o)\,
    L(\mathbf{x}_i \to \mathbf{x})\,
    G(\mathbf{x}_i \leftrightarrow \mathbf{x})\,
    V(\mathbf{x}_i \leftrightarrow \mathbf{x})\,
    \mathrm{d}A(\mathbf{x}_i).
$$

The change of variables $\mathrm{d}\omega_i = G\,\mathrm{d}A$ introduces the
**geometry term** and a **visibility** term $V \in \{0, 1\}$:

$$
G(\mathbf{x} \leftrightarrow \mathbf{x}')
  = \frac{\cos\theta\,\cos\theta'}{\lVert \mathbf{x} - \mathbf{x}' \rVert^2}.
$$

The inverse-square falloff and the two cosines are the entire reason a distant or
grazing light contributes less; they are not added by hand, they fall out of the
measure.

## Operator form and the Neumann series

Abbreviate the reflection integral as a **transport operator** $\mathcal{T}$.
Then the whole equation is

$$
L = L_e + \mathcal{T}L .
$$

Solving formally for $L$ and expanding the inverse as a geometric series gives the
**Neumann series**: the path-integral view of light transport:

$$
L = (\mathbf{I} - \mathcal{T})^{-1} L_e = \sum_{k=0}^{\infty} \mathcal{T}^{k} L_e .
$$

Each term is one more bounce: $\mathcal{T}^0 L_e$ is directly visible emitters,
$\mathcal{T}^1 L_e$ is light that bounced once, and so on. Because every physical
BRDF loses some energy, $\lVert \mathcal{T} \rVert < 1$ and the series converges,
which is *why* truncating at a finite bounce count is legitimate.

## Monte Carlo: the estimator a renderer runs

The hemispherical integral has no closed form for a real scene, so we estimate it.
Draw $N$ directions $\omega_j$ from a density $p$ and average:

$$
\big\langle L_o \big\rangle
  = L_e + \frac{1}{N}\sum_{j=1}^{N}
    \frac{f_r(\omega_j, \omega_o)\,L_i(\omega_j)\,\cos\theta_j}{p(\omega_j)} .
$$

This is unbiased for any $p > 0$ where the integrand is nonzero, with variance
$\propto 1/N$, so error falls as $\mathcal{O}(N^{-1/2})$, the slow convergence
that makes path tracing noisy. The lever is **importance sampling**: choose $p$ to
resemble the integrand. For a diffuse surface the ideal choice is the
cosine-weighted density

$$
p(\omega) = \frac{\cos\theta}{\pi},
$$

which cancels the cosine and the $1/\pi$ exactly, leaving the estimator's weight a
flat $\rho$. The hemisphere sample itself is a concentric disk lifted to the
sphere:

```glsl
// cosine-weighted hemisphere sample about +Z
vec3 cosineSampleHemisphere(vec2 u) {
    float r   = sqrt(u.x);
    float phi = 2.0 * PI * u.y;
    return vec3(r * cos(phi), r * sin(phi), sqrt(max(0.0, 1.0 - u.x)));
}
```

A single-sample path tracer is then the recursion written directly, with **Russian
roulette** to terminate paths without bias:

```rust
fn radiance(ray: Ray, scene: &Scene, rng: &mut Rng, depth: u32) -> Vec3 {
    let Some(hit) = scene.intersect(&ray) else {
        return scene.background(ray.dir); // escaped to the environment
    };

    // Importance-sample the BRDF: draw ωᵢ, weight by fr·cosθ / pdf.
    let (wi, pdf) = hit.brdf.sample(hit.wo, rng);
    let cos_theta = wi.dot(hit.normal).max(0.0);
    let mut throughput = hit.brdf.eval(hit.wo, wi) * cos_theta / pdf;

    // Russian roulette past a few bounces keeps the estimator unbiased.
    if depth > MIN_DEPTH {
        let p = throughput.max_component().clamp(0.05, 0.95);
        if rng.next_f32() > p {
            return hit.emission;
        }
        throughput /= p; // compensate the survivors
    }

    let bounce = Ray::new(hit.point, wi);
    hit.emission + throughput * radiance(bounce, scene, rng, depth + 1)
}
```

The full image is this estimator, averaged over many samples per pixel:

1. For each pixel, sample a ray through the lens and film.
2. Trace it, accumulating emission weighted by the running `throughput`.
3. At each hit, importance-sample the BRDF and recurse.
4. Average $S$ samples; the pixel's error shrinks like $1/\sqrt{S}$.

## Why it stays hard

Everything past this point (bidirectional tracing, Metropolis transport, photon
maps, ReSTIR, denoisers) is variance reduction on the same integral. The
rendering equation didn't get easier; we just got better at spending samples where
the integrand is large. The grid behind this page is GPU work; a renderer is the
same equation with the integral left in.
