import "./style.css";
import typescriptLogo from "./typescript.svg";
import { setupCounter } from "./lottery.ts";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <a href="https://logeast.github.io/magic-lottery" target="_blank">
      <img src="https://logeast.cc/cdn/imghub/logo-pure.svg" class="logo" alt="Magic Lottery logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`;

setupCounter(document.querySelector<HTMLButtonElement>("#counter")!);
