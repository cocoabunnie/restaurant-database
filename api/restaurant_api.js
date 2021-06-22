const express = require('express');
const router = express.Router();
const models = require('../database/models');

router.get('/', (req, res, next) => {
    models.Restaurant.findAll()
        .then(restaurants => {
            res.status(200)
                .json({
                    message: "Success!",
                    restaurants
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
    models.Restaurant.findByPk(req.params.id)
        .then(restaurant => {
            res.status(200)
                .json({
                    message: "Success!",
                    restaurant,
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
    models.Restaurant.create({
        name: req.body.name,
        numberOfPeople: req.body.numberOfPeople,
        date: req.body.date,
        time: req.body.time,
        allergies: req.body.allergies,
        notes: req.body.notes,
    })
        .then(restaurant => {
            res.status(201)
                .json({
                    message: "Success",
                    restaurant
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
    models.Restaurant.findByPk(req.params.id)
        .then(restaurant => {
            restaurant.update({
                name: req.body.name,
                gpa: req.body.gpa
            });

            restaurant.save();

            res.status(200)
                .json({
                    message: "Successfully updated restaurant",
                    restaurant
                })
        })
        .catch(err => {
            res.status(500)
                .json({
                    message: "Can't update restaurant",
                    err
                })
        })
})

router.delete('/:id', (req, res, next) => {
    models.Restaurant.findByPk(req.params.id)
        .then(restaurant => {
            restaurant.destroy();

            res.status(200)
                .json({
                    message: "Successfully updated restaurant",
                    restaurant
                })
        })
        .catch(err => {
            res.status(500)
            console.log(err)
                .json({
                    message: "Can't deelete restaurant",
                    err
                })
        })
})

module.exports = router;