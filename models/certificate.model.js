const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const certificateSchema = new Schema({
    name: {
        type: String,
      },  
      title: {
        type: String,
      }, 
      date: {
        type: Date,
      }
}, {
  timestamps: true,
});

const Certificate = mongoose.model('certificate', certificateSchema);

module.exports = Certificate;