const router = require('express').Router();
const Personal = require('../models/personal.model');

// Listing the data
router.route('/').get((req, res) => {
  Personal.find()
    .then(info => res.json(info))
    .catch(err => res.status(400).json('Error: ' + err));
});

// Getting specified data by ID
router.route('/:id').get((req, res) => {
  Personal.findById(req.params.id)
    .then(info => res.json(info))
    .catch(err => res.status(400).json('Error: ' + err));
});

// Adding new data
router.route('/add').post((req, res) => {
  const name = req.body.name;
  const picture = req.body.picture;
  const about = req.body.about;
  const email = req.body.email;
  const telephone = req.body.telephone;
  const country = req.body.country;
  const city = req.body.city;
  const website = req.body.website;
  const workTitle = req.body.workTitle;
  const company = req.body.company;
  const location = req.body.location;
  const employmentType = req.body.employmentType;
  const jobDescription = req.body.jobDescription;
  const workStartDate = req.body.workStartDate;
  const workEndDate = req.body.workEndDate;
  const school = req.body.school;
  const degree = req.body.degree;
  const fieldOfStudy = req.body.fieldOfStudy;
  const grade = req.body.grade;
  const educationDescription = req.body.educationDescription;
  const educationStartDate = req.body.educationStartDate;
  const educationEndDate = req.body.educationEndDate;
  const skills = req.body.skills;
  const gitHub = req.body.gitHub;
  const project = req.body.project;

  const newPersonal = new Personal({
    name,
    picture,
    about,
    email,
    telephone,
    country,
    city,
    website,
    workTitle,
    company,
    location,
    employmentType,
    jobDescription,
    workStartDate,
    workEndDate,
    school,
    degree,
    fieldOfStudy,
    grade,
    educationDescription,
    educationStartDate,
    educationEndDate,
    skills,
    gitHub,
    project,
  });

  newPersonal
    .save()
    .then(() => res.json('personal added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

// Deleting data by ID
router.route('/:id').delete((req, res) => {
  Personal.findByIdAndDelete(req.params.id)
    .then(() => res.json('Personal deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

// Updating data by ID
router.route('/update/:id').post((req, res) => {
  Personal.findById(req.params.id)
    .then(info => {
      info.name = req.body.name;
      info.picture = req.body.picture;
      info.about = req.body.about;
      info.email = req.body.email;
      info.telephone = req.body.telephone;
      info.country = req.body.country;
      info.city = req.body.city;
      info.website = req.body.website;
      info.workTitle = req.body.workTitle;
      info.company = req.body.company;
      info.location = req.body.location;
      info.employmentType = req.body.employmentType;
      info.jobDescription = req.body.jobDescription;
      info.experienceDate = req.body.experienceDate;
      info.school = req.body.school;
      info.degree = req.body.degree;
      info.fieldOfStudy = req.body.fieldOfStudy;
      info.grade = req.body.grade;
      info.educationDescription = req.body.educationDescription;
      info.educationStartDate = req.body.educationStartDate;
      info.educationEndDate = req.body.educationEndDate;
      info.skills = req.body.skills;
      info.gitHub = req.body.gitHub;
      info.project = req.body.project;

      info
        .save()
        .then(() => res.json('Personal updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
