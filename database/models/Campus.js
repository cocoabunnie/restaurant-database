const Sequelize = require('sequelize');
const db = require('../dbinit');

const Campus = db.sequelize.define('campus', {

    name: {

        type: Sequelize.STRING,
        allowNull: false,
        validate: {

            notEmpty: true,

        }

    },
    
    address: {

        type: Sequelize.STRING,
        allowNull: false,
        validate: {

            notEmpty: true,

        }

    },

    description: {

        type: Sequelize.TEXT,
        allowNull: false

    }

})

module.exports = Campus;