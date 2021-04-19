let mongoose = require('mongoose');

var assignmentSchema = mongoose.Schema({
    courseName: String,
    assignmentName: {
        type: String,
        required: true
    },
    dueDate: Date
});

var Assignment = module.exports = mongoose.model("assignments", assignmentSchema);
module.exports.get = function (callback, limit) {
    Assignment.find(callback).limit(limit);
}