//quiz init
const quiz = new Quiz();

//questions creations
let question1 = new Question ("Quelle est la capitale de la Colombie?", "Bogota", "Medellin", 1, false);
const question2 = new Question ("Quelle est la population totale de la Colombie en 2016?", "48 700 000", "62 400 000", 2, false);
const question3 = new Question ("De quel pays la Colombie tient t'elle son indépendance?", "Espagne", "USA", 3, false);
const question4 = new Question ("", "", "", 4, false);

//quetions to quiz
quiz.addQuestion(question1);
quiz.addQuestion(question2);
quiz.addQuestion(question3);
quiz.addQuestion(question4);

//putting first question to current question
question1.current = true;

//putting first question to html
question1.toHTML();