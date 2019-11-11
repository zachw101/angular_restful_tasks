const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    title: { type: String},
    desc: { type: String, default: ''},
    completed: { type: Boolean, default: false}
}, {timestamps: true})

var Task = mongoose.model('Task', TaskSchema);
module.exports.Task= Task;