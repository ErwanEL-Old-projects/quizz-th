const hide = (e) => e.style.display = "none";

class Quiz {
    constructor () {
        this.questions = [];
        this.score = 0;
        this.index = 1;
    }
};

Quiz.prototype.addQuestion = function(question) {
    this.questions.push(question);
};

Quiz.prototype.goodAnswers = function(question) {
    for(let i = 0; i < this.questions.length ; i+=1) {
        var goodAnswer = question.goodAnswer;
    }
    return goodAnswer;
};

Quiz.prototype.next = function () {
    this.index++;
        for(let i = 0; i < this.questions.length ; i+=1) {
            let o = this.questions[i];
            let a = o.index;
            let b = this.index;
            if(a === b) {
                o.current = true;
                o.toHTML();
            }
        }
    if(this.index >= this.questions.length) {
        hide(guess0);
        hide(guess1);
        hide(progress);
        score.textContent = "Bravo, vous marquez " + quiz.score + " points";
    }
};