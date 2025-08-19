const challengeSelector = document.getElementById("challengeSelector");

challengeSelector.addEventListener("change", () => {
  const selectedChallenge = challengeSelector.value;
  const challengeFrame = document.getElementById("challengeFrame");
  challengeFrame.setAttribute(
    "src",
    `challenges/html/challenge${selectedChallenge}.html`
  );
});
