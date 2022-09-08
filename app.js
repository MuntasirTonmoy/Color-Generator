const body = document.getElementById("hero");
const colorCode = document.querySelector(".color-code");

const generateColor = () => {
  const randomColor = Math.ceil(Math.random() * 900000);
  body.style.background = `#${randomColor}`;
  colorCode.innerText = `code: #${randomColor}`;
};
