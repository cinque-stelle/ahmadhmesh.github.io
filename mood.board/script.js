const quotes = {
  happy: {
    text: "Happiness is not by chance, but by choice.",
    color: "linear-gradient(135deg, #f6d365, #fda085)"
  },
  tired: {
    text: "Rest is not a reward for finishing. It's a requirement for continuing.",
    color: "linear-gradient(135deg, #667eea, #5b6c9e)"
  },
  motivated: {
    text: "Push yourself, because no one else is going to do it for you.",
    color: "linear-gradient(135deg, #ff5f6d, #ffc371)"
  },
  chill: {
    text: "Slow down and everything you are chasing will come around and catch you.",
    color: "linear-gradient(135deg, #56ccf2, #2f80ed)"
  }
};

function setMood(mood) {
  document.getElementById("quote").textContent = quotes[mood].text;
  document.getElementById("page").style.background = quotes[mood].color;
}