const { connect, evaluate, sleep } = require('./cdp');
const fs = require('fs');
// Force the single-column path at desktop widths, non-destructively.
const CSS = `
.project-feature--media {
  grid-template-columns: minmax(0, 1fr) !important;
  grid-template-areas: "print" "body" "actions" !important;
  gap: 1.4rem !important;
}`;
(async () => {
  const cdp = await connect(Number(process.argv[2] || 9343));
  await cdp.send('Page.enable'); await cdp.send('Runtime.enable');
  for (const w of [1280, 1600]) {
    await cdp.send('Emulation.setDeviceMetricsOverride', { width: w, height: 1000, deviceScaleFactor: 1, mobile: false });
    await cdp.send('Page.navigate', { url: 'http://localhost:8899/projects' });
    await sleep(4200);
    const before = await evaluate(cdp, `+document.querySelector('.project-feature--media').getBoundingClientRect().height.toFixed(0)`);
    await evaluate(cdp, `(()=>{const s=document.createElement('style');s.textContent=${JSON.stringify(CSS)};document.head.appendChild(s);return true})()`);
    await sleep(700);
    const m = await evaluate(cdp, `(() => {
      const card = document.querySelector('.project-feature--media');
      const p = card.querySelector('.project-feature-print');
      const C = card.getBoundingClientRect(), P = p.getBoundingClientRect();
      return { cardH: +C.height.toFixed(0), cardW: +C.width.toFixed(0),
               printW: +P.width.toFixed(0), printH: +P.height.toFixed(0),
               printPctOfCardW: +((P.width / C.width) * 100).toFixed(0) };
    })()`);
    console.log(`${w}px  2-col card ${before}px tall  ->  1-col card ${m.cardH}px  ` +
      `| print ${m.printW}x${m.printH} = ${m.printPctOfCardW}% of card width`);
    const { data } = await cdp.send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync(`onecol-${w}.png`, Buffer.from(data, 'base64'));
  }
  cdp.close();
})().catch((e) => { console.error(e); process.exit(1); });
