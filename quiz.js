// Function Declaration to check the answer
function checkAnswer() {
    const correctAnswer = "4";  // The correct answer is "4"

    // Step 1: Retrieve the User's Answer
    const userAnswer = document.querySelector('input[name="quiz"]:checked');

    // If no radio button is selected, show a message asking to select an answer
    if (!userAnswer) {
        document.getElementById('feedback').textContent = "Please select an answer!";
        return;
    }

    // Step 2: Compare the User’s Answer (userAnswer.value) with the Correct Answer
    if (userAnswer === correctAnswer) {  // Directly using userAnswer.value
        // Feedback for correct answer
        document.getElementById('feedback').textContent = "Correct! Well done.";
    } else {
        // Feedback for incorrect answer
        document.getElementById('feedback').textContent = "That's incorrect. Try again!";
    }
}

// Step 3: Add an Event Listener to the Submit Button
const submitButton = document.getElementById('submit-answer');
if (submitButton) {
    submitButton.addEventListener('click', checkAnswer);
}


