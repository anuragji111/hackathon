import React, { useState } from 'react';

function App() {
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: '',
    question1: 'Never',
    question2: 'Never',
    question3: 'Never',
    question4: 'Never',
    question5: 'Never',
    question6: 'Never',
    question7: 'Never',
    question8: 'Never',
    question9: 'Never',
    question10: 'Never'
  });
  const [assessmentResult, setAssessmentResult] = useState(null);

  
  const handleSubmit = (event) => {
    event.preventDefault();
    let totalScore = 0;

   
    for (const key in formData) {
      if (key.startsWith('question')) {
        totalScore += parseInt(formData[key]);
      }
    }

    const averageScore = totalScore / 10;

    
    let resultText;
    if (averageScore <= 1) {
      resultText = "You seem to be doing well. Keep it up!";
    } else if (averageScore <= 2) {
      resultText = "You may want to consider seeking support if these symptoms persist.";
    } else {
      resultText = "It's important to seek professional help. Please reach out to a mental health expert.";
    }

    
    setAssessmentResult(`Your average score is ${averageScore.toFixed(2)}, indicating: ${resultText}`);
  };


  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  return (
    <div>
      <header>
        <h1>Mental Health Screening</h1>
      </header>
      <main>
        <section id="screening">
          <h2>Start Screening</h2>
          <p>Take the assessment to evaluate your mental health status.</p>
          <form id="assessmentForm" onSubmit={handleSubmit}>
            {/* Render form inputs */}
            {Object.keys(formData).map((key) => (
              <div key={key}>
                <label htmlFor={key}>{key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1').toLowerCase()}: </label>
                {key.startsWith('question') ? (
                  <select id={key} name={key} value={formData[key]} onChange={handleInputChange} required>
                    <option value="Never">Never</option>
                    <option value="Rarely">Rarely</option>
                    <option value="Sometimes">Sometimes</option>
                    <option value="Often">Often</option>
                    <option value="Always">Always</option>
                  </select>
                ) : (
                  <input type={key === 'email' ? 'email' : 'text'} id={key} name={key} value={formData[key]} onChange={handleInputChange} required />
                )}
              </div>
            ))}
            <button type="submit">Submit</button>
          </form>
          {/* Render assessment result */}
          {assessmentResult && (
            <section id="assessmentResult">
              <h2>Assessment Result</h2>
              <p>{assessmentResult}</p>
            </section>
          )}
        </section>
        {/* Other sections go here */}
      </main>
      <footer>
        <p>&copy; 2024 Mental Health Screening App</p>
      </footer>
    </div>
  );
}

export default App;
