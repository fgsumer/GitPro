const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const gitHubSchema = new Schema(
  {
    title: { type: String, required: true },
    photo: { type: String },
    video: { type: String },
    repository: [String],
    deployedSite: [String],
    description: { type: String },
  },
  {
    timestamps: true,
  },
);

const GitHub = mongoose.model('GitHub', gitHubSchema);

module.exports = GitHub;
