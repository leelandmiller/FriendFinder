const faker = require('faker');
const jsf = require('json-schema-faker');



let applicantsList = [];

if (applicantsList.length === 0) {
    for (let i = 0; i < 50; i++) {
        let applicant = {
            name: faker.name.findName(),
            image: faker.image.avatar(),
            scores: [
                faker.random.number() % 5 + 1,
                faker.random.number() % 5 + 1,
                faker.random.number() % 5 + 1,
                faker.random.number() % 5 + 1,
                faker.random.number() % 5 + 1,
                faker.random.number() % 5 + 1,
                faker.random.number() % 5 + 1,
            ]
        }
        applicantsList.push(applicant);
    };
}

let findEmployers = (applicant) => {
    // ===== HW INSTRUCTIONS: Find Single Best matches ===== //
    /* =============================================
    |    Since I'm not making a 'Best friend finder',
    |    I'm making a "Job" finder, I thought it would
    |    be better to find the Top 5 applicants.
    |    Same thing with a new applicant. An
    |    employer/applicant shouldn't want to
    |    put all their eggs in 1 basket ;)
    ============================================= */
    const employers = require('./employers');
    // get all applicants
    let empList = employers.employersList;

    let combineScores = (employer) => {
        return applicant.scores.map((score, ind) => [score, employer.scores[ind]]);
    }

    let checkCompatibility = (employer) => {
        // combine this applicant's scores with the employer's scores
        let combinedScores = combineScores(employer);

        let scoreDiff = combinedScores.map((innerArr, ind) => {
            return Math.abs(innerArr[0] - innerArr[1]);
        }).reduce((total, val, ind, scoreDiff) => {
            return total + val;
        }, 0);
        return scoreDiff;
    };

    let compatScores = empList.map((employer) => {
        let compatScore = checkCompatibility(employer);
        return { id: empList.indexOf(employer), compatScore };
    });


    compatScores.sort( (a, b) => a.compatScore - b.compatScore );
    // console.log('matches', matches);
    let top5 = compatScores.filter((compatScore, ind) => ind < 5);

    // console.log('top5',top5);
    return top5;
};

module.exports = { applicantsList, findEmployers };
