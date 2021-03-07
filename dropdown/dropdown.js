const dropdown = document.querySelector(".dropdown");
const btnDrop = document.querySelector(".bloc-top");
const iconePlus = document.querySelector(".icone-plus");

let toggleIndex = 0;

btnDrop.addEventListener("click", () => {
  if (toggleIndex === 0) {
    dropdown.style.height = `${dropdown.scrollHeight}px`;
    iconePlus.style.transform = "rotate(45deg)";
    toggleIndex++;
  } else {
    dropdown.style.height = `${btnDrop.scrollHeight}px`;
    iconePlus.style.transform = "rotate(0deg)";
    toggleIndex--;
  }
});
