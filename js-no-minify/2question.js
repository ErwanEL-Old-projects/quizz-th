class Question {
    constructor (question, goodanswer, badanswer, index, current) {
        this.question = question;
        this.goodAnswer = goodanswer;
        this.badAnswer = badanswer;
        this.index = index;
        this.current = false;
    }
};

Question.prototype.toHTML = function () {
    if (this.current) {
        question.textContent = this.question;
        var random = Math.floor(Math.random() * 2) + 1;
        if (random === 1) {
            guess0.textContent = this.goodAnswer;
            guess1.textContent = this.badAnswer;
        } else {
            guess0.textContent = this.badAnswer;
            guess1.textContent = this.goodAnswer;
        }
    }
    progress.textContent = "Question " + this.index + " sur 3";//quiz.questions.length
    score.textContent = "Score " + quiz.score;
};