document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("calculate");

  button.addEventListener("click", () => {
    const yourName = document.getElementById("your-name").value.trim();
    const crushName = document.getElementById("crush-name").value.trim();

    // 1. Basic validation
    if (!yourName || !crushName) {
      alert("Please enter both names.");
      return;
    }

    // 2. Format names (capitalize first letter)
    const formatName = (name) =>
      name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
    const yourFormatted = formatName(yourName);
    const crushFormatted = formatName(crushName);

    // 3. Random love percentage
    const percentage = Math.floor(Math.random() * 101);

    // 4. Emoji based on love percentage
    let emoji = "💔";
    if (percentage > 70) emoji = "💖";
    else if (percentage > 40) emoji = "😊";
    else if (percentage > 20) emoji = "🤞";

    // 5. Update result on the page
    const message = `${yourFormatted} and ${crushFormatted}'s chance of love:`;
    document.getElementById("result-message").innerText = message;
    document.getElementById(
      "result-percentage"
    ).innerText = `${percentage}% ${emoji}`;
  });
});
