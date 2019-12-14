const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    picture: {type: String},
    phone: {type: String},
    country: {type: String},
    city: {type: String},
    website: {type: String},

    education: [
      {
        institution: { type: String},
        fieldOfStudy: {type: String},
        degree: { type: String },
        startDate: { type: Date},
        endDate: { type: Date},
      },
    ],
    workExperience: [
      {
        companyName: { type: String },
        companyUrl: { type: String },
        employmentType: {
          type: String,
          enum: [
            'Full-Time',
            'Part-Time',
            'Self-Employed',
            'Freelance',
            'Contract',
            'Internship',
            'Apprenticeship',
          ],
        },
        is_current: { type: Boolean },
        startDate: { type: Date },
        endDate: { type: Date },
        description: { type: String},
      },
    ],
    skill: { type: String },
    certificate: [
      {
        certificateName: { type: String },
        date: Date,
      },
    ],
    language: [
      {
        language: { type: String },
        fluencyLevelOption: {
          type: String,
          enum: [
            'Native Speaker',
            'Fluent',
            'Proficient',
            'Intermediate',
            'Basic Communication Skills',
          ],
        },
      },
    ],

    gitHub: [
      {
        title: { type: String },
        photo: String,
        video: String,
        repository: String,
        deployedSite: String,
        description: String,
      },
    ],
    project: [
      {
        name: { type: String },
        role: String,
        startDate: Date,
        endDate: Date,
        projectURL: String,
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
