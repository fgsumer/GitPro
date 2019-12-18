const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    name: { type: String },
    about: { type: String },
    picture: { type: String },
    telephone: { type: String },
    email1: { type: String },
    country: { type: String },
    city: { type: String },
    language: { type: String },
    languageFluencyLevel: { type: String },
    website: { type: String },

    school: { type: String },
    degree: { type: String },
    fieldOfStudy: { type: String },
    grade: { type: String },
    educationDescription: { type: String },
    educationStartDate: { type: String },
    educationEndDate: { type: String },

    workTitle: { type: String },
    company: { type: String },
    companyUrl: { type: String },
    location: { type: String },
    employmentType: { type: String },
    jobDescription: { type: String },
    is_current: { type: Boolean },
    workStartDate: { type: String },
    workEndDate: { type: String },

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
