const express = require('express');
const router = express.Router();
const path = require('path');

const survey = require('./../data/surveyQuestions');
const results = require('./../data/results');

router.get('/applicant/survey', (req, res) => {
    // renders the APPLICANT Survey using Handlebars :{
    res.render('applicant-survey', survey.questions);
})

router.get('/employer/survey', (req, res) => {
    // renders the EMPLOYER Survey using Handlebars :{
    res.render('employer-survey', survey.questions);
})

router.get('/employer/results', (req, res) => {
    res.render('emp-results', {
        top5: results.results.top5,
        // questions: results.results.answers
    });
});

router.get('/applicant/results', (req, res) => {
    res.render('app-results', {
        top5: results.results.top5,
        // questions: results.results.answers
    });
});

router.use((req, res) => {
    res.render('index');
});

module.exports = router;
