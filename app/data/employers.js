const faker = require('faker');
const jsf = require('json-schema-faker');

const applicants = require('./applicants');

let employersList = [];

if (employersList.length === 0) {
    for (let i = 0; i < 50; i++) {
        let employer = {
            name: faker.company.companyName(),
            image: faker.image.business(),
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
        employersList.push(employer);
    };
}


let findApplicants = (employer) => {
    // ===== HW INSTRUCTIONS: Find Single Best matches ===== //
    /* =============================================
    |    Since I'm not making a 'Best friend finder',
    |    I'm making a "Job" finder, I thought it would
    |    be better to find the Top 5 applicants.
    |    Same thing with a new applicant. An
    |    employer/applicant shouldn't want to
    |    put all their eggs in 1 basket ;)
    ============================================= */

    // get all applicants
    let appList = applicants.applicantsList;

    let combineScores = (applicant) => {
        return employer.scores.map((score, ind) => [score, applicant.scores[ind]]);
    }

    let checkCompatibility = (applicant) => {
        // combine this applicant's scores with the employer's scores
        let combinedScores = combineScores(applicant);

        let scoreDiff = combinedScores.map((innerArr, ind) => {
            return Math.abs(innerArr[0] - innerArr[1]);
        }).reduce((total, val, ind, scoreDiff) => {
            return total + val;
        }, 0);
        return scoreDiff;
    };

    let compatScores = appList.map((applicant) => {
        let compatScore = checkCompatibility(applicant);
        return { id: appList.indexOf(applicant), compatScore };
    });


    compatScores.sort( (a, b) => a.compatScore - b.compatScore );
    // console.log('matches', matches);
    let top5 = compatScores.filter((compatScore, ind) => ind < 5);

    // console.log('top5',top5);
    return top5;
};

module.exports = { employersList, findApplicants };
