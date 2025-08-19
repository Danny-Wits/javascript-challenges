const input = document.getElementById("input");
const output = document.getElementById("output");
const button = document.getElementById("submit");

button.addEventListener("click", () => {
  output.textContent = reverse_string(input.value);
});

//!Challenge Function
/**
 * Returns a reversed copy of the input string.
 * @param {string} str the string to reverse
 * @returns {string} the reversed string
 */
function reverse_string(str) {
  //change the code below if you want to provide you own implementation @Danny-Wits
  return str.split("").reverse().join("");
}
