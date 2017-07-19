const faker = require('faker');
const jsf = require('json-schema-faker');

let employersList = [];

let makeFakeData = () => {
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
                faker.random.number() % 5 + 1,
                faker.random.number() % 5 + 1,
                faker.random.number() % 5 + 1,
            ]
        }
        employersList.push(employer);
    }

    return employersList;
};


module.exports = {makeFakeData, employersList};
