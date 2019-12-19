var express = require('express');

var ImageRouter = express.Router();
const multer = require('multer');
const Personal = require('../models/personal.model');

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, 'public/uploads');
  },
  filename: function(req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
    cb(null, true);
  } else {
    // rejects storing a file
    cb(null, false);
  }
};

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5,
  },
  fileFilter: fileFilter,
});

/* 
    stores image in uploads folder
    using multer and creates a reference to the 
    file
*/
ImageRouter.route('/uploadmulter').post(upload.single('imageData'), (req, res, next) => {
  console.log(req.body);

  const newPersonal = new Personal({
    imageName: req.body.imageName,
    imageData: req.file.path,
  });

  newImage
    .save()
    .then(result => {
      console.log(result);
      res.status(200).json({
        success: true,
        document: result,
      });
    })
    .catch(err => next(err));
});

module.exports = ImageRouter;
