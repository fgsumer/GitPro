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
    const title = req.body.title;
    const picture = req.body.picture;
    const phone = Number(req.body.phone);
    const country = req.body.country;
    const email = req.body.email;
    const city = req.body.city;
    const website = req.body.website;

    const newPersonal = new Personal({name, title, picture, phone, country, city, website, email});
  
    newPersonal.save()
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
        info.title = req.body.title;
        info.phone = Number(req.body.phone);
        info.picture = req.body.picture;
        info.country = req.body.country;
        info.email = req.body.email;
        info.city = req.body.city;
        info.website = req.body.website;
    info.save()
      .then(() => res.json('Personal updated!'))
       .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;