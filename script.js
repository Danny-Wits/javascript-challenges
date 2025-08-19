const switchButton = document.getElementById("switch");

switchButton.addEventListener("click", () => {
  const selectedChallenge = document.getElementById("challengeSelector").value;
  const challengeFrame = document.getElementById("challengeFrame");
  console.log(selectedChallenge);

  challengeFrame.setAttribute(
    "src",
    `challenges/html/challenge${selectedChallenge}.html`
  );
});
