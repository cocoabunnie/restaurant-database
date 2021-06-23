const Sequelize = require('sequelize');
const db = require('../dbinit');

const Reservation = db.sequelize.define('reservation', {

    name: {

        type: Sequelize.STRING,
        allowNull: false,
        validate: {

            notEmpty: true,

        }

    },

    numberOfPeople: {

        type: Sequelize.STRING,
        allowNull: false,
        validate: {

            notEmpty: true,

        }

    },

    date: {

        type: Sequelize.STRING,
        allowNull: false,
        validate: {

            notEmpty: true,

        }

    },

    time: {

        type: Sequelize.STRING,
        allowNull: false,
        validate: {

            notEmpty: true,

        }

    },


    allergies: {

        type: Sequelize.TEXT,
        allowNull: false

    },

    notes: {

        type: Sequelize.TEXT,
        allowNull: false

    }

})

module.exports = Reservation;