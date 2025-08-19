const input = document.getElementById("input");
const output = document.getElementById("output");
const button = document.getElementById("submit");

button.addEventListener("click", () => {
  let length = Number(input.value);
  if (length < 0 || length > 10)
    return alert("Please enter a number between 0 and 10");
  output.textContent = generate_password(length);
});

//!Challenge Function

function generate_password(len) {
  //change the code below if you want to provide you own implementation @Danny-Wits

  //random alphanumeric password generate by taking a random number and converting it to base 36
  //then slicing the first 2 characters as there will always be 0.

  return Math.random()
    .toString(36)
    .slice(2, len + 2);
}
