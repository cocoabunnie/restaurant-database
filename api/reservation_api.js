const express = require('express');
const router = express.Router();
const models = require('../database/models');

router.get('/', (req, res, next) => {
    models.Reservation.findAll()
        .then(reservastions => {
            res.status(200)
                .json({
                    message: "Success!",
                    reservastions
                });
        }).catch(err => {
            res.status(500)
                .json({
                    message: "Error",
                    err,
                })
        })
})

router.get('/:id', (req, res, next) => {
    models.Reservation.findByPk(req.params.id)
        .then(reservation => {
            res.status(200)
                .json({
                    message: "Success!",
                    reservation,
                });
        }).catch(err => {
            res.status(500)
                .json({
                    message: "Error",
                    err,
                })
        })
})

router.post('/', (req, res, next) => {
    models.Reservation.create({
        name: req.body.name,
        numberOfPeople: req.body.numberOfPeople,
        date: req.body.date,
        time: req.body.time,
        allergies: req.body.allergies,
        notes: req.body.notes,
    })
        .then(reservation => {
            res.status(201)
                .json({
                    message: "Success",
                    reservation
                })
        })
        .catch(err => {
            res.status(400)
                .json({
                    message: "Error posting",
                    err,
                })
        })
})

router.put('/:id', (req, res, next) => {
    models.Reservation.findByPk(req.params.id)
        .then(reservation => {
            reservation.update({
                name: req.body.name,
                gpa: req.body.gpa
            });

            reservation.save();

            res.status(200)
                .json({
                    message: "Updated Reservation!",
                    reservation
                })
        })
        .catch(err => {
            res.status(500)
                .json({
                    message: "Can't Update Reservation!",
                    err
                })
        })
})

router.delete('/:id', (req, res, next) => {
    models.Reservation.findByPk(req.params.id)
        .then(reservation => {
            reservation.destroy();

            res.status(200)
                .json({
                    message: "Updated Reservation!",
                    reservation
                })
        })
        .catch(err => {
            res.status(500)
            console.log(err)
                .json({
                    message: "Can't Delete Reservation",
                    err
                })
        })
})

module.exports = router;