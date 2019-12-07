const router = require('express').Router();
let Project = require('../models/project.model');

// listing the data
router.route('/').get((req, res) => {
  Project.find()
    .then(project => res.json(project))
    .catch(err => res.status(400).json('Error: ' + err));
});

// adding new project
router.route('/add').post((req, res) => {
  const name = req.body.name;
  const role = req.body.role;
  const startDate = Date.parse(req.body.startDate);
  const endDate = Date.parse(req.body.endDate);
  const projectURL = req.body.projectURL;
  const description = req.body.description;

  const newProject = new Project({
    name,
    role,
    startDate,
    endDate,
    projectURL,
    description,
  });

  newProject
    .save()
    .then(() => res.json('Project successfully added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

// getting a project by ID
router.route('/:id').get((req, res) => {
  Project.findById(req.params.id)
    .then(project => res.json(project))
    .catch(err => res.status(400).json('Error: ' + err));
});

// deleting project by ID
router.route('/:id').delete((req, res) => {
  Project.findByIdAndDelete(req.params.id)
    .then(() => res.json('Project successfully deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

// updating project data by ID
router.route('/update/:id').post((req, res) => {
  Project.findById(req.params.id)
    .then(project => {
      project.name = req.body.name;
      project.role = req.body.role;
      project.startDate = Date.parse(req.body.startDate);
      project.endDate = Date.parse(req.body.endDate);
      project.projectURL = req.body.projectURL;
      project.projectURL = req.body.projectURL;
      project.description = req.body.description;
      //project.duration = Number(req.body.duration);

      project
        .save()
        .then(() => res.json('Project successfully updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
