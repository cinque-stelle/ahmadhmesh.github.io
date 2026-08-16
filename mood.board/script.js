const quotes = {
  happy: {
    texts: [
      "Happiness is not by chance, but by choice.",
      "Choose joy, and let it lead the way.",
      "The best way to spread happiness is to share it."
    ],
    color: "linear-gradient(135deg, #f6d365, #fda085)"
  },
  tired: {
    texts: [
      "Rest is not a reward for finishing. It's a requirement for continuing.",
      "Even the strongest need to pause and recharge.",
      "Slow down. Tomorrow will still be there."
    ],
    color: "linear-gradient(135deg, #667eea, #5b6c9e)"
  },
  motivated: {
    texts: [
      "Push yourself, because no one else is going to do it for you.",
      "Discipline is choosing between what you want now and what you want most.",
      "Small steps every day lead to big results."
    ],
    color: "linear-gradient(135deg, #ff5f6d, #ffc371)"
  },
  chill: {
    texts: [
      "Slow down and everything you are chasing will come around and catch you.",
      "Peace begins with a single deep breath.",
      "Not everything needs to be rushed."
    ],
    color: "linear-gradient(135deg, #56ccf2, #2f80ed)"
  }
};

function setMood(mood) {
  const moodData = quotes[mood];
  const randomIndex = Math.floor(Math.random() * moodData.texts.length);
  document.getElementById("quote").textContent = moodData.texts[randomIndex];
  document.getElementById("page").style.background = moodData.color;
}