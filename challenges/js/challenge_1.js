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
  //using split, reverse and join
  //split converts the string into an array eg "hello" -> ["h", "e", "l", "l", "o"]
  //reversing using the reverse method on array ["h", "e", "l", "l", "o"] -> ["o", "l", "l", "e", "h"]
  //join converts the array into a string ["o", "l", "l", "e", "h"] -> "olleh"
  return str.split("").reverse().join("");
}
