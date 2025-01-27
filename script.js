document.addEventListener("DOMContentLoaded", function () {
  let button = document.getElementById("calculate");
  button.addEventListener("click", calculateLove);
});
function calculateLove() {
  let yourName = document.getElementById("your-name").value;
  let crushName = document.getElementById("crush-name").value;

  if (yourName !== "" && crushName !== "") {
    let percentage = Math.floor(Math.random() * 101); // 0-.99999 * 101 -> 0-100.99999
    document.getElementById(
      "result-message"
    ).innerText = `${yourName} and ${crushName}'s chance of love:`;
    document.getElementById("result-percentage").innerText = `${percentage}%`;
  }
}
