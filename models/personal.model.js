const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const personalSchema = new Schema(
  {
    _id: Schema.Types.ObjectId,
    name: { type: String, required: true },
    surname: { type: String, required: true },
    picture: 'string',
    phone: 'Number',
    email: 'string',
    country: 'string',
    city: 'string',
    website: 'string',
    userModel: { type: Schema.Types.ObjectId, ref: 'User' },

    education: [
      {
        institution: { type: String, required: true },
        fieldOfStudy: 'string',
        degree: { type: String, required: true },
        startDate: { type: Date, required: true },
        endDate: { type: Date, required: true },
      },
    ],
    workExperience: [
      {
        companyName: { type: String, required: true },
        companyUrl: { type: String },
        employmentType: {
          type: String,
          required: true,
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
        startDate: { type: Date, required: true },
        endDate: { type: Date, required: true },
        description: { type: String, required: true },
      },
    ],
    skill: { required: true, type: 'string' },
    certificate: [
      {
        certificateName: { type: String, required: true },
        date: Date,
      },
    ],
    language: [
      {
        language: { type: String, required: true },
        fluencyLevelOption: {
          type: String,
          required: true,
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
        title: { type: String, required: true },
        photo: String,
        video: String,
        repository: String,
        deployedSite: String,
        description: String,
      },
    ],
    project: [
      {
        name: { type: String, required: true },
        role: String,
        startDate: Date,
        endDate: Date,
        projectURL: String,
        description: { type: String, required: true },
      },
    ],
  },
  {
    timestamps: true,
  },
);

const Personal = mongoose.model('Personal', personalSchema);

module.exports = Personal;
