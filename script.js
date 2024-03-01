document.addEventListener('DOMContentLoaded', function() {
    const assessmentForm = document.getElementById('assessmentForm');
    const assessmentResult = document.getElementById('assessmentResult');

    assessmentForm.addEventListener('submit', function(event) {
        event.preventDefault(); 

        
        const questions = ['question1', 'question2', 'question3', 'question4', 'question5', 'question6', 'question7', 'question8', 'question9', 'question10'];
        let totalScore = 0;
        questions.forEach(function(question) {
            const selectedOption = document.getElementById(question).value;
            totalScore += getScore(selectedOption);
        });
        const averageScore = totalScore / questions.length;

        
        assessmentResult.style.display = 'block';
        assessmentResult.innerHTML = `<h2>Assessment Result</h2>
                                       <p>Your average score is ${averageScore.toFixed(2)}, indicating: ${interpretScore(averageScore)}</p>`;

        
        saveResultToLocalStorage(averageScore);
    });
});


function getScore(option) {
    switch(option) {
        case 'Never':
            return 0;
        case 'Rarely':
            return 1;
        case 'Sometimes':
            return 2;
        case 'Often':
            return 3;
        case 'Always':
            return 4;
        default:
            return 0;
    }
}


function interpretScore(score) {
    if (score < 1.5) {
        return "You seem to be doing well. Keep up the good work!";
    } else if (score < 2.5) {
        return "It's important to practice self-care and seek support when needed.";
    } else if (score < 3.5) {
        return "You may be experiencing some challenges. Consider reaching out to a mental health professional.";
    } else {
        return "It's important to seek professional help. Please reach out to a mental health expert.";
    }
}


function saveResultToLocalStorage(score) {
    const results = JSON.parse(localStorage.getItem('assessmentResults')) || [];
    results.push({ date: new Date(), score: score });
    localStorage.setItem('assessmentResults', JSON.stringify(results));
}
