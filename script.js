function calculateScore() {

  const transport = Number(document.getElementById("transport").value);
  const energy = Number(document.getElementById("energy").value);
  const water = Number(document.getElementById("water").value);
  const waste = Number(document.getElementById("waste").value);

  const total = transport + energy + water + waste;
  const percentage = Math.round((total / 80) * 100);

  document.getElementById("resultScore").textContent =
    percentage + "/100";

  document.getElementById("mainScore").textContent =
    percentage;

  updateEcoStatus(percentage);

  let message;

  if (percentage >= 85) {
    message = "Excellent! 🌱 Your lifestyle is highly sustainable.";
  } else if (percentage >= 70) {
    message = "Great work! 🌿 Your choices are helping the planet.";
  } else if (percentage >= 50) {
    message = "Good start! 🌍 A few improvements can make a big difference.";
  } else {
    message = "Every small change matters. Start with one sustainable habit today! 🌱";
  }

  document.getElementById("resultText").textContent = message;

  const transportPercent = Math.round((transport / 20) * 100);
  const energyPercent = Math.round((energy / 20) * 100);
  const waterPercent = Math.round((water / 20) * 100);
  const wastePercent = Math.round((waste / 20) * 100);

  document.getElementById("transportPercent").textContent =
    transportPercent + "%";

  document.getElementById("energyPercent").textContent =
    energyPercent + "%";

  document.getElementById("waterPercent").textContent =
    waterPercent + "%";

  document.getElementById("wastePercent").textContent =
    wastePercent + "%";

  document.getElementById("transportBar").style.width =
    transportPercent + "%";

  document.getElementById("energyBar").style.width =
    energyPercent + "%";

  document.getElementById("waterBar").style.width =
    waterPercent + "%";

  document.getElementById("wasteBar").style.width =
    wastePercent + "%";
}


/* ---------------- CHALLENGES ---------------- */

let completed = 0;

function completeChallenge(button) {

  if (button.textContent === "✓ Completed") {
    return;
  }

  button.textContent = "✓ Completed";
  button.style.background = "#23844a";
  button.style.color = "white";

  completed++;

  document.getElementById("challengeCount").textContent =
    completed;

  document.getElementById("challengeProgress").style.width =
    (completed / 4 * 100) + "%";
}


/* ---------------- SMART TIPS ---------------- */

const tips = [

  "Choose reusable products whenever possible and reduce single-use plastic.",

  "Walk or cycle for short trips to reduce transportation emissions.",

  "Turn off lights and electronic devices when they are not being used.",

  "Repair and reuse items before buying replacements.",

  "Separate recyclable materials from general household waste.",

  "Use water carefully and avoid leaving taps running unnecessarily.",

  "Planting and protecting trees helps ecosystems store carbon and support biodiversity.",

  "Buying only what you need can reduce unnecessary resource consumption."

];

let tipIndex = 0;

function newTip() {

  tipIndex++;

  if (tipIndex >= tips.length) {
    tipIndex = 0;
  }

  document.getElementById("tip").textContent =
    tips[tipIndex];
}


/* ---------------- NOVA AI ---------------- */

function getNovaAnswer(question) {

  const q = question.toLowerCase();

  if (
    q.includes("ignore") ||
    q.includes("happen") ||
    q.includes("sustainability")
  ) {
    return "If environmental sustainability is ignored, pollution and greenhouse-gas emissions can increase, ecosystems can be damaged, resources can become harder to access, and climate risks can grow. Sustainable choices help protect resources and improve quality of life for future generations. 🌍";
  }

  if (
    q.includes("sustain") ||
    q.includes("sustainable") ||
    q.includes("live green") ||
    q.includes("lifestyle")
  ) {
    return "You can live more sustainably by reducing waste, saving electricity and water, choosing walking or public transport when practical, reusing products, and buying only what you need. Small habits become powerful when practiced consistently. 🌱";
  }

  if (
    q.includes("recycl") ||
    q.includes("waste") ||
    q.includes("plastic")
  ) {
    return "Recycling helps recover useful materials and reduces the amount of waste sent to disposal. Even better, follow the waste hierarchy: reduce what you use, reuse what you can, and recycle materials when possible. ♻️";
  }

  if (
    q.includes("student") ||
    q.includes("school") ||
    q.includes("college")
  ) {
    return "Students can make a real difference by avoiding unnecessary plastic, carrying reusable bottles, saving electricity, reducing paper waste, using shared or public transport, and encouraging sustainable habits among friends. 🎓🌱";
  }

  if (
    q.includes("water") ||
    q.includes("save water")
  ) {
    return "Save water by fixing leaks, turning off taps when water isn't needed, taking efficient showers, and using water carefully when cleaning. Protecting freshwater also helps ecosystems and communities. 💧";
  }

  if (
    q.includes("energy") ||
    q.includes("electricity") ||
    q.includes("power")
  ) {
    return "Reduce energy use by switching off unused lights and electronics, using efficient appliances, and making use of natural light when possible. Saving energy can reduce both resource consumption and emissions. ⚡";
  }

  if (
    q.includes("climate") ||
    q.includes("global warming") ||
    q.includes("carbon")
  ) {
    return "Climate change is strongly linked to human-caused greenhouse-gas emissions. Using energy efficiently, choosing lower-emission transport, protecting forests, and reducing unnecessary consumption can all contribute to lowering environmental impact. 🌍";
  }

  return "Great question! 🌱 A sustainable approach usually starts with three ideas: reduce unnecessary consumption, reuse items whenever possible, and choose options that use fewer resources. Try asking me about climate, recycling, water, energy, or sustainable living.";
}


function askNova() {

  const input = document.getElementById("novaInput");
  const answer = document.getElementById("novaAnswer");
  const question = input.value.trim();

  if (!question) {

    answer.textContent =
      "Ask me something about sustainability first! 🌱";

    return;
  }

  answer.textContent =
    "Nova is thinking... 🤖🌱";

  setTimeout(function() {

    answer.textContent =
      getNovaAnswer(question);

  }, 500);
}


function quickQuestion(question) {

  document.getElementById("novaInput").value =
    question;

  askNova();
}


/* ---------------- SUSTAINABILITY GOALS ---------------- */

let goalPoints = 0;
let goalCompleted = 0;

function completeGoal(button, points) {

  if (button.classList.contains("done")) {
    return;
  }

  button.classList.add("done");

  button.querySelector("b").textContent =
    "✓ Done";

  goalPoints += points;
  goalCompleted++;

  document.getElementById("goalPoints").textContent =
    goalPoints;

  document.getElementById("goalCompleted").textContent =
    goalCompleted;

  document.getElementById("goalProgress").style.width =
    (goalCompleted / 5 * 100) + "%";
}


/* ---------------- LIVE ECO STATUS ---------------- */

function updateEcoStatus(score) {

  const status = document.querySelector(".score-status");

  if (!status) return;

  const level = document.getElementById("scoreLevel");

  if (score >= 85) {

    status.textContent = "🌟 Excellent!";
    level.textContent = "🌍 Planet Protector";

  } else if (score >= 70) {

    status.textContent = "🌿 Great job!";
    level.textContent = "🌱 Sustainable Explorer";

  } else if (score >= 50) {

    status.textContent = "🌱 Good start!";
    level.textContent = "🌿 Green Beginner";

  } else {

    status.textContent = "💚 Room to improve!";
    level.textContent = "🌎 Eco Learner";
  }
    }
