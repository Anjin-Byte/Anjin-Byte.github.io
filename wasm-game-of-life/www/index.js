import * as wasm from "../pkg/wasm_game_of_life.js";
import { Universe } from "../pkg/wasm_game_of_life.js";

import __wbg_init from "../pkg/wasm_game_of_life.js"

const pre = document.getElementById("game-of-life-canvas");

async function start() {
    // Initialize the WebAssembly module asynchronously
    const wasm = await __wbg_init("../pkg/wasm_game_of_life_bg.wasm");
}

start();

const universe = Universe.new();

const renderLoop = () => {
    pre.textContent = universe.render();
    universe.tick();

    requestAnimationFrame(renderLoop);
};

requestAnimationFrame(renderLoop);

wasm.greet("Mae");

