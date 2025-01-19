function checkAnswer() {
    const correctAnswer = "4";  

    const userAnswer = document.querySelector('input[name="quiz"]:checked');

    if (!userAnswer) {
        document.getElementById('feedback').textContent = "Please select an answer!";
        return;
    }

    const selectedAnswer = userAnswer.value;

    
    if (selectedAnswer === correctAnswer) {
        document.getElementById('feedback').textContent = "Correct! Well done.";
    } else {
        document.getElementById('feedback').textContent = "That's incorrect. Try again!";
    }
}

const submitButton = document.getElementById('submit-answer');
if (submitButton) {
    submitButton.addEventListener('click', checkAnswer);
}

