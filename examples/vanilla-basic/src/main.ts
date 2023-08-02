import "./a.css";
import { MagicLottery } from "magic-lottery";

document.addEventListener("DOMContentLoaded", () => {
  const drawButton: HTMLButtonElement | null =
    document.querySelector("#drawButton");
  const resultDiv: HTMLDivElement | null = document.querySelector("#result");

  const participants: string[] = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
  const options: { replacement: boolean } = {
    replacement: true,
  };

  const lottery = new MagicLottery(participants, options);

  drawButton?.addEventListener("click", () => {
    for (let i = 0; i < 20; i++) {
      setTimeout(() => {
        const winner: string = lottery.drawWinner();
        if (resultDiv) {
          resultDiv.textContent = `恭喜 ${winner} 中奖！`;
        }
        rotateGrid(winner);
      }, 500);
    }
  });

  function rotateGrid(winner: string): void {
    const gridItems: NodeListOf<HTMLDivElement> =
      document.querySelectorAll(".grid-item");
    const winnerIndex: number = participants.indexOf(winner);
    const rotationAngle: number =
      360 * 5 + (360 / participants.length) * winnerIndex;

    gridItems.forEach((item: HTMLDivElement, index: number) => {
      item.style.transform = `rotate(${rotationAngle}deg)`;
      item.style.transition = "transform 5s ease-in-out";
    });

    setTimeout(() => {
      gridItems.forEach((item: HTMLDivElement, index: number) => {
        item.style.transform = "rotate(0deg)";
        item.style.transition = "none";
      });
    }, 5000);
  }
});

document.querySelector("#app")!.innerHTML = `
<div class="container">
  <h1 class="title">九宫格抽奖</h1>
  <div class="lottery-container">
    <div class="grid-container">
      <div class="grid-item">1</div>
      <div class="grid-item">2</div>
      <div class="grid-item">3</div>
      <div class="grid-item">4</div>
      <div class="grid-item">5</div>
      <div class="grid-item">6</div>
      <div class="grid-item">7</div>
      <div class="grid-item">8</div>
      <div class="grid-item">9</div>
    </div>
    <button id="drawButton" class="draw-button">抽奖</button>
    <div id="result" class="result"></div>
  </div>
</div>
`;
