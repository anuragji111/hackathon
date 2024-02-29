
document.addEventListener("DOMContentLoaded", function() {
    
    const assessmentForm = document.getElementById("assessmentForm"); 
    const assessmentResult = document.getElementById("assessmentResult"); 
    const nameInput = document.getElementById("name"); 
    const emailInput = document.getElementById("email"); 
    const ageInput = document.getElementById("age"); 
    const questions = document.querySelectorAll("select[name^='question']"); 
    const submitButton = document.querySelector("button[type='submit']"); 


    assessmentForm.addEventListener("submit", function(event) {
        event.preventDefault(); 

        let totalScore = 0; 
        
        questions.forEach(function(question) {
            totalScore += parseInt(question.value); 
        });

        
        const averageScore = totalScore / questions.length;

        let resultText; 

        
        if (averageScore <= 1) {
            resultText = "You seem to be doing well. Keep it up!";
        } else if (averageScore <= 2) {
            resultText = "You may want to consider seeking support if these symptoms persist.";
        } else {
            resultText = "It's important to seek professional help. Please reach out to a mental health expert.";
        }

        
        assessmentResult.innerHTML = `<h2>Assessment Result</h2>
            <p>Your average score is ${averageScore.toFixed(2)}, indicating: ${resultText}</p>`;

        
        assessmentResult.style.display = "block";
    });

    assessmentForm.addEventListener("input", function() {
        const isValid = nameInput.checkValidity() && emailInput.checkValidity() && ageInput.checkValidity(); // Check if all input fields are valid

        submitButton.disabled = !isValid; 
    });
});
