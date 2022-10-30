function buy() {
  let introduse = prompt(
    "You wanna rock the road with this wheels? Tell me Your name then?"
  );
  if (introduse.length > 0) {
    alert(
      `My congradulations ${introduse}😎!!! It's the best day of Your life`
    );
  } else {
    alert("Jane Dou does not wanna ride this wheels");
  }
}

let buyButton = document.querySelector("button");
buyButton.addEventListener("click", buy);
