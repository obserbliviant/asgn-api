const Assignment = require('./asgn-model');

exports.index = function (req, res) {
    Assignment.get(function (err, assignments) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "Assignments retrieved successfully",
            data: assignments
        });
    });
}

exports.new = function (req, res) {
    var assignment = new Assignment();
    assignment.courseName = req.body.courseName;
    assignment.assignmentName = req.body.assignmentName;
    assignment.dueDate = req.body.dueDate;
    assignment.save(function (err) {
        if (err) {
            res.json(err);
        }
        res.json({
            message: "New assignment created!",
            data: assignment
        });
    });
};

exports.view = function (req, res) {
    Assignment.findById(req.params.assignment_id, function (err, assignment) {
        if (err) {
            res.send(err);
        }
        res.json({
            message: "Assignment details loading...",
            data: assignment
        });
    });
};

exports.update = function (req, res) {
    Assignment.findById(req.params.assignment_id, function (err, assignment) {
        if (err) {
            res.send(err);
        }
        assignment.courseName = req.body.courseName;
        assignment.assignmentName = req.body.assignmentName;
        assignment.dueDate = req.body.dueDate;
        assignment.save(function (err) {
            if (err) {
                res.json(err);
            }
            res.json({
                message: "Assignment updated",
                data: assignment
            });
        });
    });
};

exports.delete = function (req, res) {
    Assignment.remove({
        _id: req.params.assignment_id
    }, function (err, assignment) {
        if (err) {
            res.send(err);
        }
        res.json(
            {
                status: "success",
                message: "Assignment deleted"
            }
        );
    });
};