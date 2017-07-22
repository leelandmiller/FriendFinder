
// { name: 'Skye Gerhold',
//    image: 'https://s3.amazonaws.com/uifaces/faces/twitter/kimcool/128.jpg',
//    scores: [ 3, 1, 3, 1, 4, 2, 2, 3, 2, 2 ]
// }

let getAnswers = (questions, top5) => {
    console.log(top5)
    let answers = {};
    let currentAnswers;

    // console.log(concatQuestions);

    top5.forEach((match, ind) => {
        currentAnswers = match.scores.map((score, i) => questions[i].options[score - 1]);
        // answers['match' + ind] = currentAnswers;
        match.answers = currentAnswers
    });
};

let results = {
    // top5: [],
    // answers: [ ['answer1', 'answer2', 'etc'], ['answer1', 'answer2', 'etc'] ]
};

module.exports = { results, getAnswers };
