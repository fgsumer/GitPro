const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const workExperienceSchema = new Schema({
  companyName: { type: String, required: true },
  companyUrl: { type: String },
  employmentType: { type: String, required: true },
  is_current: { type: Boolean },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  description: { type: String, required: true },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
});

const WorkExperience = mongoose.model('WorkExperience', workExperienceSchema);

module.exports = WorkExperience;
