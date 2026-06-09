import {
  WAYPOINTS,
  findWaypoint,
  findByRoute,
  parseRouteToWaypointId,
  coerceWaypointId,
  homeWaypoint,
} from '../space/waypoints';

function assert(condition: unknown, message: string): void {
  if (!condition) throw new Error(message);
}

function assertEq<T>(actual: T, expected: T, message: string): void {
  const a = JSON.stringify(actual);
  const b = JSON.stringify(expected);
  if (a !== b) throw new Error(`${message}\nexpected: ${b}\nactual:   ${a}`);
}

// Sharp oracle: every waypoint resolves to itself through both lookup paths
// (id↔route is a bijection), so the router and the camera can never disagree
// about where a route points.
function testRouteWaypointBijection(): void {
  for (const w of WAYPOINTS) {
    const byRoute = findByRoute(w.route);
    assert(byRoute !== null && byRoute.id === w.id, `findByRoute(${w.route}) → ${w.id}`);
    assertEq(parseRouteToWaypointId(w.route), w.id, `parseRouteToWaypointId(${w.route})`);
    assertEq(findWaypoint(w.id).route, w.route, `findWaypoint(${w.id}).route`);
  }
}

// Boundary validators reject unknown/non-string input rather than throwing.
function testUnknownInputs(): void {
  assertEq(parseRouteToWaypointId('/garbage'), null, 'unknown route → null');
  assertEq(parseRouteToWaypointId(42 as unknown), null, 'non-string route → null');
  assertEq(parseRouteToWaypointId(undefined), null, 'undefined route → null');
  assertEq(findByRoute('/nope'), null, 'unknown route → null');
  assertEq(coerceWaypointId('garbage'), homeWaypoint.id, 'unknown id → home');
  assertEq(coerceWaypointId(undefined), homeWaypoint.id, 'undefined id → home');
}

function run(): void {
  testRouteWaypointBijection();
  testUnknownInputs();
  // eslint-disable-next-line no-console
  console.log('waypoints.test.ts passed');
}

run();
