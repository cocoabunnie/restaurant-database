const express = require('express');
const router = express.Router();
const models = require('../database/models');

router.get('/', (req, res, next) => {
    models.Student.findAll()
    .then(students => {
        res.status(200)
        .json({
            message: "Success!",
            students,
        });
    }).catch(err => {
        res.status(500)
        .json({
            message: "An error has occurred!",
            err,
        })
    })
})

router.get('/:id', (req, res, next) => {
    models.Student.findByPk(req.params.id)
    .then(student => {
        res.status(200)
        .json({
            message: "Success!",
            student,
        });
    }).catch(err => {
        res.status(500)
        .json({
            message: "An error has occurred!",
            err,
        })
    })
})

router.post('/', (req, res, next) => {
    console.log(req.body)
    models.Student.create({
        firstname: req.body.firstName,
        lastname: req.body.lastName,
        email: req.body.email,
        gpa: req.body.gpa,
        collegeID: req.body.collegeID
    })
    .then(student => {
        console.log("hshshshshs")
        res.status(201)
        .json({
            message: "Success",
            student
        })
    })
    .catch(err => {
        console.log(err)
        res.status(400)
        .json({
            message: "Error posting",
            err,
        })
    })
})

router.put('/:id', (req, res, next) => {
    models.Student.findByPk(req.params.id)
    .then(student => {
        student.update({
            name: req.body.name,
            gpa: req.body.gpa
        });

        student.save();

        res.status(200)
        .json({
            message: "Successfully updated student",
            student
        })
    })
    .catch(err => {
        res.status(500)
        .json({
            message: "Cant update student",
            err
        })
    })
})

router.delete('/:id', (req, res, next) => {
    models.Student.findByPk(req.params.id)
    .then(student => {
        student.destroy();

        res.status(200)
        .json({
            message: "Successfully updated student",
            student
        })
    })
    .catch(err => {
        res.status(500)
        .json({
            message: "Cant destroy student",
            err
        })
    })
})

module.exports = router;