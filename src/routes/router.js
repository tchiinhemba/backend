
const express = require('express');
const router = express.Router();

const skillsController = require('../controllers/api/skillsController');
const certificationsController = require('../controllers/api/certificationsController');
const servicesController = require('../controllers/api/servicesController');
const projectsController = require('../controllers/api/projectsController');

const homeController = require('../controllers/homeController');


router
    .get('/skills', skillsController.skills)
    .get('/certifications', certificationsController.certifications)
    .get('/services', servicesController.services)
    .get('/projects', projectsController.projects)
    .get('/', homeController.home)


module.exports = router;