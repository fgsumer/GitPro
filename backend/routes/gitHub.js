const router = require('express').Router();
let GitHub = require('../models/gitHub.model');

// listing the data
router.route('/').get((req, res) => {
  GitHub.find()
    .then(gitHub => res.json(gitHub))
    .catch(err => res.status(400).json('Error: ' + err));
});

// adding new gitHub data
router.route('/add').post((req, res) => {
  const title = req.body.title;
  const photo = req.body.photo;
  const video = req.body.video;
  const repository = req.body.repository;
  const deployedSite = req.body.deployedSite;
  const description = req.body.description;

  const newGitHub = new GitHub({
    title,
    photo,
    video,
    repository,
    deployedSite,
    description,
  });

  newGitHub
    .save()
    .then(() => res.json('GitHub info successfully added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

// getting a gitHub repo by ID
router.route('/:id').get((req, res) => {
  GitHub.findById(req.params.id)
    .then(gitHub => res.json(gitHub))
    .catch(err => res.status(400).json('Error: ' + err));
});

// deleting gitHub by ID
router.route('/:id').delete((req, res) => {
  GitHub.findByIdAndDelete(req.params.id)
    .then(() => res.json('GitHub info successfully deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

// updating gitHub data by ID
router.route('/update/:id').post((req, res) => {
  GitHub.findById(req.params.id)
    .then(gitHub => {
      gitHub.title = req.body.title;
      gitHub.photo = req.body.photo;
      gitHub.video = req.body.video;
      gitHub.repository = req.body.repository;
      gitHub.deployedSite = req.body.deployedSite;
      gitHub.description = req.body.description;
      //gitHub.duration = Number(req.body.duration);

      gitHub
        .save()
        .then(() => res.json('GitHub data successfully updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
