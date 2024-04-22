function submitAnswers(){
    // Retrieve selected values from the form
    const q1Answer = document.querySelector('input[name="q1"]:checked').value;
    const q2Answer = document.querySelector('input[name="q2"]:checked').value;
    const q3Answer = document.querySelector('input[name="q3"]:checked').value;
    const q4Answer = document.querySelector('input[name="q4"]:checked').value;
    const q5Answer = document.querySelector('input[name="q5"]:checked').value;
    let q1AnswerResults;
    let q2AnswerResults;
    let q3AnswerResults;
    let q4AnswerResults;
    let q5AnswerResults;
    if(q1Answer =="C"){
        q1AnswerResults = "Correct";
    }
    else{
        q1AnswerResults = "InCorrect";
    }

    if(q2Answer =="D"){
        q2AnswerResults = "Correct";
    }
    else{
        q2AnswerResults = "InCorrect";
    }

    if(q3Answer =="D"){
        q3AnswerResults = "Correct";
    }
    else{
        q3AnswerResults = "InCorrect";
    }

    if(q4Answer =="D"){
        q4AnswerResults = "Correct";
    }
    else{
        q4AnswerResults = "InCorrect";
    }

    if(q5Answer =="C"){
        q5AnswerResults = "Correct";
    }
    else{
        q5AnswerResults = "InCorrect";
    }

    // Display answers
    alert(  "Question 1 answer: " + q1AnswerResults + 
            "\nQuestion 2 answer: " + q2AnswerResults + 
            "\nQuestion 3 answer: " + q3AnswerResults + 
            "\nQuestion 4 answer: " + q4AnswerResults + 
            "\nQuestion 5 answer: " + q5AnswerResults);
}
function home(){
    window.location.href = "index.html";
}

function Q1(){
    window.location.href = "quiz1.html";
}
function documents(){
    window.location.href = "documents.html";
}

function notes(){
    window.location.href = "notes.html";
}
function quizzes(){
    window.location.href = "quizzes.html";
}
function videos(){
    window.location.href = "videos.html";
}