
const express = require('express');

const skillsController = require('../controllers/skillsController');
const certificationsController = require('../controllers/certificationsController')

const router = express.Router();

router
    .get('/', skillsController.skills)
    .get('/certifications', certificationsController.certifications)


module.exports = router;