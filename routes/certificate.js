const router = require('express').Router();
const Certificate = require('../models/certificate.model');

// Listing the data
router.route('/').get((req, res) => {
    Certificate.find()
    .then(data => res.json(data))
    .catch(err => res.status(400).json('Error: ' + err));
});

// Getting specified data by ID
router.route('/:id').get((req, res) => {
    Certificate.findById(req.params.id)
      .then(data => res.json(data))
      .catch(err => res.status(400).json('Error: ' + err));
  });

  // Adding new data
router.route('/add').post((req, res) => {
    const name = req.body.name;
    const title = req.body.title;
    const date = Date.parse(req.body.date);


    const newCertificate = new Certificate({name, title, date});
  
    newCertificate.save()
      .then(() => res.json('Certificate added!'))
      .catch(err => res.status(400).json('Error: ' + err));
  });

// Deleting data by ID
 router.route('/:id').delete((req, res) => {
 Certificate.findByIdAndDelete(req.params.id)
  .then(() => res.json('Certificate deleted.'))
   .catch(err => res.status(400).json('Error: ' + err));
 });

// Updating data by ID
 router.route('/update/:id').post((req, res) => {
  Certificate.findById(req.params.id)
    .then(data => {
        data.name = req.body.name;
        data.title = req.body.title;
        data.date = Date.parse(req.body.date);

    data.save()
      .then(() => res.json('Certificate updated!'))
       .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;