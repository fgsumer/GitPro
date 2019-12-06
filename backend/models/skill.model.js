const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const skillSchema = new Schema({
  skill: { required: true, type: 'string' },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
});

const Skill = mongoose.model('Skill', skillSchema);

module.exports = Skill;
//{ required: true, minItems: 3, type: 'string' }
