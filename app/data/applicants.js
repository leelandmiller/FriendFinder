const faker = require('faker');
const jsf = require('json-schema-faker');

let applicantsList = [];

let makeFakeData = () => {
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
                faker.random.number() % 5 + 1,
                faker.random.number() % 5 + 1,
                faker.random.number() % 5 + 1,
            ]
        }
        applicantsList.push(applicant);
    }

    return applicantsList;
};


module.exports = { makeFakeData, applicantsList };
