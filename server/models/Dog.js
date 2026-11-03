const mongoose = require('mongoose');

let DogModel;

const DogSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },

  breed: {
    type: String,
    required: true,
    trim: true,
  },

  age: {
    type: Number,
    min: 0,
    required: true,
  },

  createdDate: {
    type: Date,
    default: Date.now,
  },

});

DogModel = mongoose.model('Dog', DogSchema);

// We only want to export the cat model, so we can overwrite the entire exports object.
module.exports = DogModel;
