const body = document.getElementById("hero");
console.log("hello");

const generateColor = () => {
  console.log("click");
  const randomColor = Math.ceil(Math.random() * 900000);
  body.style.background = `#${randomColor}`;
};
