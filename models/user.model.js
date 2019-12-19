const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    img: { type: String },
    imageName: { type: String },
    imageData: { type: String },
    picture: { type: String },
    phone: { type: String },
    country: { type: String },
    city: { type: String },
    website: { type: String },

    institution: { type: String },
    fieldOfStudy: { type: String },
    degree: { type: String },
    educationStartDate: { type: String },
    educationEndDate: { type: String },
    educationDescription: { type: String },

    workTitle: { type: String },
    companyName: { type: String },
    companyLocation: { type: String },
    employmentType: { type: String },
    is_current: { type: Boolean },
    workStartDate: { type: String },
    workEndDate: { type: String },
    jobDescription: { type: String },

    skills: { type: String },

    gitHub: [
      {
        title: { type: String },
        photo: { type: String },
        video: { type: String },
        repository: { type: String },
        deployedSite: { type: String },
        description: { type: String },
      },
    ],
  },
  {
    timestamps: true,
  },
);

const User = mongoose.model('User', userSchema);

module.exports = User;
