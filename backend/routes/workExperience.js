const router = require('express').Router();
const WorkExperience = require('../models/workExperience.model');

// @route   GET /work
// @desc    list work experiences
// @access  Public
router.route('/').get((req, res) => {
  WorkExperience.find()
    .then(experience => res.json(experience))
    .catch(err => res.status(400).json('Error: ' + err));
});

// @route   POST /work/add
// @desc    add work experiences
// @access  Public
router.post('/add', (req, res) => {
  const title = req.body.title;
  const companyName = req.body.companyName;
  const companyURL = req.body.companyURL;
  const employmentType = req.body.employmentType;
  const isCurrent = req.body.is_current;
  const startDate = req.body.startDate;
  const endDate = req.body.endDate;
  const description = req.body.description;

  const newWorkExperience = new WorkExperience({
    title,
    companyName,
    companyURL,
    employmentType,
    isCurrent,
    startDate,
    endDate,
    description,
  });

  newWorkExperience
    .save()
    .then(() => res.json('Work experience is added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

// @route   DELETE /work/:id
// @desc    delete work experiences
// @access  Public
router.delete('/:id', (req, res) => {
  WorkExperience.findByIdAndDelete(req.params.id)
    .then(() => res.json('Work experience is deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

// @route   POST /work/update/:id
// @desc    update work experiences
// @access  Public
router.post('/update/:id', (req, res) => {
  WorkExperience.findById(req.params.id)
    .then(experience => {
      experience.title = req.body.title;
      experience.companyName = req.body.companyName;
      experience.companyURL = req.body.companyURL;
      experience.employmentType = req.body.employmentType;
      experience.isCurrent = req.body.isCurrent;
      experience.startDate = req.body.startDate;
      experience.endDate = req.body.endDate;
      experience.description = req.body.description;

      experience
        .save()
        .then(() => res.json('Work experience is updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
