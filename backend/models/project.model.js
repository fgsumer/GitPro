const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const projectSchema = new Schema(
  {
    name: { type: String, required: true },
    role: { type: String },
    startDate: { type: Date },
    endDate: { type: Date },
    projectURL: { type: String },
    description: { type: String },
  },
  {
    timestamps: true,
  },
);

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;
