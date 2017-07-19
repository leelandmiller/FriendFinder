const express = require('express');
const router = express.Router();
const path = require('path');

const employers = require('./../data/employers');
const applicants = require('./../data/applicants');

router.get('/employers', (req, res) => {
    let employerList = employers.makeFakeData();
    return res.json(employerList);
});

router.get('/applicants', (req, res) => {
    let applicantList = applicants.makeFakeData();
    return res.json(applicantList);
});

router.post('/employers/new', (req, res) => {
    let newEmployer = req.body;
    console.log(req.body);
    // post some stuff
    employers.employersList.push(newEmployer);
});

module.exports = router;
