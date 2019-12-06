const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const personalSchema = new Schema({
    name: {
        type: String,
        required: true,
      },  
      title: {
        type: String,
      }, 
      picture: {
        type: String,
      },  
      phone: {
        type: Number,
      },
      email: {
        type: String,
      },
      country: {
        type: String,
      },
      city: {
        type: String,
      },
      website: {
        type: String,
      }
}, {
  timestamps: true,
});

const personal = mongoose.model('personal', personalSchema);

module.exports = personal;