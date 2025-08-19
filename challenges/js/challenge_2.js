const input = document.getElementById("input");
const output = document.getElementById("output");
const button = document.getElementById("submit");

button.addEventListener("click", () => {
  let inputString = input.value;
  let inputArray = [];
  try {
    //Using JSON.parse to try to convert string to array
    inputArray = JSON.parse("[" + inputString + "]");
  } catch (error) {
    alert("Please enter a valid array :\n" + error);
    return;
  }

  output.textContent = mostFrequentElement(inputArray);
});

//!Challenge Function

/**
 * Finds the most frequent element in an array.
 * @param {array} array The array to search
 * @returns {any} The most frequent element in the array
 */
function mostFrequentElement(array) {
  //change the code below if you want to provide you own implementation @Danny-Wits

  //Sorting the array in descending order of frequency
  // using array.filter to count the frequency
  return array
    .sort(
      (a, b) =>
        array.filter((i) => i === a).length -
        array.filter((i) => i === b).length
    )
    .pop();
}
