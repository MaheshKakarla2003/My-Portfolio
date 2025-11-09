const text = document.querySelector(".text");
const typeSpeed = 100;
const eraseSpeed = 100;
const delayBetweenWords = 1000;
const words = ["Web Developer", "Backend Developer", "Full Stack Developer"];

document.addEventListener("DOMContentLoaded", () =>
  setTimeout(typing, delayBetweenWords)
);

async function typing() {
  while (true) {
    for (let word of words) {
      for (let i = 0; i < word.length; i++) {
        await new Promise((resolve) => setTimeout(resolve, typeSpeed));
        text.innerHTML += word.charAt(i);
      }
      for (let j = word.length - 1; j >= 0; j--) {
        await new Promise((resolve) => setTimeout(resolve, eraseSpeed));
        text.innerHTML = word.substring(0, j);
      }

      await new Promise((resolve) => setTimeout(resolve, delayBetweenWords));
    }
  }
}
