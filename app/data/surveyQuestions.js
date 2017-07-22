let questions = {
    coName: 'Company Name',
    name: 'Full Name',
    img: 'Image',
    row1Questions: [
        {
            label: 'Hours',
            options: [
                '10 per week',
                '20 per week',
                '30 per week',
                '35 per week',
                '40 per week'
            ]
        },
        {
            label: 'Language',
            options: [
                'Javascript',
                'Python',
                'Java',
                'Ruby',
                'PHP'
            ]
        },
        {
            label: 'Experience',
            options: [
                '1 Year Or Less',
                '1-2 Years',
                '2-3 Years',
                '3-5 Years',
                '5+ Years'
            ]
        },
        {
            label: 'Position',
            options: [
                'QA Engineer',
                'Jr. Developer',
                'Sr. Developer',
                'Project Manager',
                'Remote Developer'
            ]
        },
    ],
    row2Questions: [
        {
            label: 'Education',
            options: [
                'High School',
                'Some College',
                'College Degree',
                'Bootcamp/Certificate',
                'Any'
            ]
        },
        {
            label: 'Team or Solo?',
            options: [
                '1 (Lone Wolf)',
                '2',
                '3',
                '4',
                '5 (Group Needed)'
            ]
        },
        {
            label: 'Dogs or Cats?',
            options: [
                '1 (Cats)',
                '2','3','4','5 (Dogs)'
            ]
        },
    ]
}

let concatQuestions = questions.row1Questions.concat(questions.row2Questions);

let refactorAnswers = (surveyer) => {
    surveyer.scores = [];
    Object.keys(surveyer).forEach((key, ind) => {
        if (key.startsWith('row')) {
            surveyer.scores.push(surveyer[key]);
            delete surveyer[key];
        }
    });

    return surveyer;
};


let compileScores = (surveyer) => {

    scores = concatQuestions.map((question, index) => question.options.indexOf(surveyer.scores[index]) + 1);

    surveyer.scores = scores;

    return surveyer;
};

module.exports = { concatQuestions, questions, refactorAnswers, compileScores };
