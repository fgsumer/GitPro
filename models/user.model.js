const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// const userSchema = new Schema(
//   {
//     username: { type: String, required: true },
//     email: { type: String, required: true, unique: true },
//     password: { type: String, required: true },
//     picture: { type: String },
//     phone: { type: String },
//     country: { type: String },
//     city: { type: String },
//     website: { type: String },

//     education: [
//       {
//         institution: { type: String },
//         fieldOfStudy: { type: String },
//         degree: { type: String },
//         startDate: { type: Date },
//         endDate: { type: Date },
//       },
//     ],
//     workExperience: [
//       {
//         companyName: { type: String },
//         companyUrl: { type: String },
//         employmentType: {
//           type: { type: String },
//           enum: [
//             'Full-Time',
//             'Part-Time',
//             'Self-Employed',
//             'Freelance',
//             'Contract',
//             'Internship',
//             'Apprenticeship',
//           ],
//         },
//         is_current: { type: Boolean },
//         startDate: { type: Date },
//         endDate: { type: Date },
//         description: { type: String },
//       },
//     ],
//     skill: { type: String },
//     certificate: [
//       {
//         certificateName: { type: String },
//         date: { type: Date },
//       },
//     ],
//     language: [
//       {
//         language: { type: String },
//         fluencyLevelOption: {
//           type: { type: String },
//           enum: [
//             'Native Speaker',
//             'Fluent',
//             'Proficient',
//             'Intermediate',
//             'Basic Communication Skills',
//           ],
//         },
//       },
//     ],

//     gitHub: [
//       {
//         title: { type: String },
//         photo: { type: String },
//         video: { type: String },
//         repository: { type: String },
//         deployedSite: { type: String },
//         description: { type: String },
//       },
//     ],
//     project: [
//       {
//         name: { type: String },
//         role: { type: String },
//         startDate: { type: Date },
//         endDate: { type: Date },
//         projectURL: { type: String },
//         description: { type: String },
//       },
//     ],
//   },
//   {
//     timestamps: true,
//   },
// );
const userSchema = new Schema(
  {
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    picture: { type: String },
    phone: { type: String },
    country: { type: String },
    city: { type: String },
    website: { type: String },

    institution: { type: String },
    fieldOfStudy: { type: String },
    degree: { type: String },
    startDate: { type: Date },
    endDate: { type: Date },
    companyName: { type: String },
    companyUrl: { type: String },
    employmentType: { type: String },
    is_current: { type: Boolean },
    startDate: { type: Date },
    endDate: { type: Date },
    description: { type: String },
    skill: { type: String },
    certificateName: { type: String },
    date: { type: Date },
    language: { type: String },
    fluencyLevelOption: { type: String },
    projectName: { type: String },
    role: { type: String },
    startDate: { type: Date },
    endDate: { type: Date },
    projectURL: { type: String },
    description: { type: String },
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
