const express = require('express');
const router = express.Router();
const path = require('path');
const url = require('url');

const employers = require('./../data/employers');
const applicants = require('./../data/applicants');
const survey = require('./../data/surveyQuestions');
const results = require('./../data/results');

router.get('/employers', (req, res) => {
    return res.json(employers.employersList);
});

router.get('/applicants', (req, res) => {
    let applicantList = applicants.applicantsList;
    return res.json(applicantList);
});

router.post('/employers/new', (req, res) => {
    let newEmployer = req.body;
    let refactoredEmp = survey.refactorAnswers(newEmployer);

    emp = survey.compileScores(refactoredEmp);
    employers.employersList.push(emp);
    // finds applicants that matches the survey inputs for the new employer
    let top5 = employers.findApplicants(emp);

    results.results = {};
    results.results.top5 = top5.map((result) => applicants.applicantsList[parseInt(result.id)]);

    results.results.answers = results.getAnswers(survey.concatQuestions, results.results.top5);


    res.redirect('/employer/results');
});

router.post('/applicants/new', (req, res) => {
    let newApplicant = req.body;
    let refactoredApp = survey.refactorAnswers(newApplicant);

    appl = survey.compileScores(refactoredApp);
    applicants.applicantsList.push(appl);
    // finds applicants that matches the survey inputs for the new employer
    let top5 = applicants.findEmployers(appl);

    results.results = {}
    results.results.top5 = top5.map((result) => employers.employersList[parseInt(result.id)]);
    results.results.answers = results.getAnswers(survey.concatQuestions, results.results.top5);

    res.redirect('/applicant/results');
});

module.exports = router;
