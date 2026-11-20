
const score = Number(localStorage.getItem("quizScore")) || 0;

const totalQuestions =
    Number(localStorage.getItem("totalQuestions")) || 10;

const percentage = Math.round((score / totalQuestions) * 100);

const finalScore = document.getElementById("final-score");
const percentageElement = document.getElementById("percentage");
const performance = document.getElementById("performance");
const restartButton = document.getElementById("restart-btn");

finalScore.textContent = `${score}/${totalQuestions}`;

percentageElement.textContent = `You scored ${percentage}%`;

if (percentage === 100) {
    performance.textContent = "Perfect Score! Excellent Work!";
} else if (percentage >= 70) {
    performance.textContent = "Excellent Performance!";
} else if (percentage >= 40) {
    performance.textContent = "Good Effort! Keep Improving!";
} else {
    performance.textContent = "Keep Practicing! You Can Do Better!";
}

restartButton.addEventListener("click", () => {
    localStorage.removeItem("quizScore");
    localStorage.removeItem("totalQuestions");

    window.location.href = "index.html";
});
