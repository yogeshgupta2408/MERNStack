const mongoose=require('mongoose');

const Schema=mongoose.Schema;

const movieSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  director: {
    type: String,
    required: true,
  },
  genre: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  released: {
    type: Boolean
  },
  image: {
      type: String,
      required: true
  },
});

module.exports=mongoose.model("Movie",movieSchema);