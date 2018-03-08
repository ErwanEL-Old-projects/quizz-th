guess0.onclick = () => {
    if(guess0.textContent === quiz.goodAnswers(question1) || guess0.textContent === quiz.goodAnswers(question2) || guess0.textContent === quiz.goodAnswers(question3)) {
        quiz.score += 1;
        quiz.next();
    } else {
        quiz.next();
    }
};

guess1.onclick = () => {
    if(guess1.textContent === quiz.goodAnswers(question1) || guess1.textContent === quiz.goodAnswers(question2) || guess1.textContent === quiz.goodAnswers(question3)) {
        quiz.score += 1;
        quiz.next();
    } else {
        quiz.next();
    }
};