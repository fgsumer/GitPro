const router = require('express').Router();
const Skill = require('../models/skill.model');

// @route   GET /skill
// @desc    list skills
// @access  Public
router.route('/').get((req, res) => {
  Skill.find()
    .then(skills => res.json(skills))
    .catch(err => res.status(400).json('Error: ' + err));
});

// @route   POST /skill/add
// @desc    add skills
// @access  Public
router.post('/add', (req, res) => {
  const skill = req.body.skill;

  const newSkill = new Skill({
    skill,
  });

  newSkill
    .save()
    .then(() => res.json('New skills are added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

// @route   DELETE /skill/:id
// @desc    delete skills
// @access  Public
router.delete('/:id', (req, res) => {
  Skill.findByIdAndDelete(req.params.id)
    .then(() => res.json('deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

// @route   POST /work/update/:id
// @desc    update skills
// @access  Public
router.post('/update/:id', (req, res) => {
  Skill.findById(req.params.id)
    .then(skill => {
      skill.skill = req.body.skill;

      skill
        .save()
        .then(() => res.json('Skills are updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
