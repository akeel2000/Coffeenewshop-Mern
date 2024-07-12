const mongoose=require('mongoose');
const  Schema =mongoose.Schema;

const BooktableSchema=new Schema({
    name: {
        type: String,
        required: true,
        trim: true
      },
      number: {
        type: String,
        required: true,
        unique: true,
        trim: true
      },
      mail: {
        type: String,
        required: true,
        unique: true,
        trim: true
      },
      personsCount: {
        type: Number,
        required: true,
        min: 1
      },
      date: {
        type: Date,
        required: true,
        default: Date.now
      },
      time: {
        type: String,
        required: true,
        trim: true
      }
    });


const booktable = mongoose.model("booktable",BooktableSchema);

module.exports = booktable;