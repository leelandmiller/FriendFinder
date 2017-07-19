const express = require('express');
const router = express.Router();
const path = require('path');

const questions = require('./../data/surveyQuestions');

router.get('/applicant/survey', (req, res) => {
    // renders the APPLICANT Survey using Handlebars :{
    res.render('applicant-survey', questions);
})

router.get('/employer/survey', (req, res) => {
    // renders the EMPLOYER Survey using Handlebars :{
    res.render('employer-survey', questions);
})

router.use((req, res) => {
    res.render('index');
});

module.exports = router;
