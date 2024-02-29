document.addEventListener("DOMContentLoaded", function () {
    const assessmentForm = document.getElementById("assessmentForm");
    const assessmentResult = document.getElementById("assessmentResult");

    assessmentForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const formData = new FormData(assessmentForm);
        const name = formData.get("name");
        const email = formData.get("email");
        const age = formData.get("age");
        const question1 = formData.get("question1");
        const question2 = formData.get("question2");

        // Simulate assessment result calculation
        const score = Math.floor(Math.random() * 100);

        // Display assessment result
        assessmentResult.innerHTML = `
                <h2>Assessment Result</h2>
                <p>Name: ${name}</p>
                <p>Email: ${email}</p>
                <p>Age: ${age}</p>
                <p>Question 1: ${question1}</p>
                <p>Question 2: ${question2}</p>
                <p>Score: ${score}</p>
            `;
        assessmentResult.style.display = "block";
    });
});
