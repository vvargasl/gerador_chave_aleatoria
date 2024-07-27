let sliderElement = document.querySelector("#slider");
let buttonElement = document.querySelector("#button");

let sizePassword = document.querySelector("#valor");
let password = document.querySelector("#password");

let containerPassword = document.querySelector("#container-password");

let charset =
  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%";
let novaSenha = "";

sizePassword.innerHTML = sliderElement.value;

sliderElement.oninput = function () {
  sizePassword.innerHTML = this.value;
  updateSliderColor();
};

function generatePassword() {
  let pass = "";
  for (let i = 0, n = charset.length; i < sliderElement.value; ++i) {
    pass += charset.charAt(Math.floor(Math.random() * n));
  }

  containerPassword.classList.remove("hide");
  password.innerHTML = pass;
  novaSenha = pass;
}

function updateSliderColor() {
  const value = parseInt(sliderElement.value);
  const min = parseInt(sliderElement.min);
  const max = parseInt(sliderElement.max);

  // Calcula a porcentagem do valor do slider
  const percentage = (value - min) / (max - min);

  // Define cores de amarelo a verde
  const startColor = [255, 255, 0]; // Amarelo
  const endColor = [62, 183, 43]; // Verde (cor do botão)

  // Interpolação linear das cores
  const r = Math.round(
    startColor[0] + (endColor[0] - startColor[0]) * percentage
  );
  const g = Math.round(
    startColor[1] + (endColor[1] - startColor[1]) * percentage
  );
  const b = Math.round(
    startColor[2] + (endColor[2] - startColor[2]) * percentage
  );

  const color = `rgb(${r},${g},${b})`;

  // Aplica o gradiente ao slider
  sliderElement.style.background = `linear-gradient(to right, ${color} ${
    percentage * 100
  }%, #dfdfdf ${percentage * 100}%)`;
}

updateSliderColor();
