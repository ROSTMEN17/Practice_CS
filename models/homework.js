const mongoose = require('mongoose');

const homework = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    due_date:{
        type: Date,
        required: true
    },
    student_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
      }
});

const homeworkSchema =  mongoose.model('homework', homework);
module.exports = homeworkSchema;