const mongoose =require('mongoose');
const Schema = mongoose.Schema;

// schema (it's like an template)

const ContactusSchema = new Schema({
    fullname:{
        type:String,
        required: true
    },

    mail:{
        type:String,
        required: true
    },
     
    number:{
        type:String,
        required: true
    },

    text:{
        type:String,
        required: true
    },

  
  
   
   
})


const contactus = mongoose.model("contactus",ContactusSchema);

module.exports = contactus;