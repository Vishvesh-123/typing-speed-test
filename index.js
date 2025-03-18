let startTime;
let totalWords = 0;
let timeLeft = 60; // 1 minute timer
let timerInterval;
let timerRunning = false;

function startTest() {
    // Reset the timer and word count
    timeLeft = 60;
    totalWords = 0;

    // Reset the UI and start the timer
    document.getElementById("timer").textContent = `Time remaining: ${timeLeft}s`;
    document.getElementById("wordCount").textContent = `Words Typed: 0`;

    // Enable the typing area and disable the start button
    document.getElementById("typingInput").disabled = false;
    document.getElementById("typingInput").value = "";
    document.getElementById("startBtn").disabled = true;

    // Start the timer
    startTimer();
}

function startTimer() {
    timerRunning = true;

    // Countdown timer
    timerInterval = setInterval(function() {
        timeLeft--;
        document.getElementById("timer").textContent = `Time remaining: ${timeLeft}s`;

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            endTest();
        }
    }, 1000); // Update every second
}

function checkTyping() {
    let inputText = document.getElementById("typingInput").value;

    // Update word count
    totalWords = inputText.split(/\s+/).filter(function(word) {
        return word.length > 0;
    }).length;

    // Display word count
    document.getElementById("wordCount").textContent = `Words Typed: ${totalWords}`;
}

function endTest() {
    // Disable typing input after the test ends
    document.getElementById("typingInput").disabled = true;
    document.getElementById("startBtn").disabled = false;

    // Display the final word count
    document.getElementById("wordCount").textContent = `Words Typed: ${totalWords}`;
}
