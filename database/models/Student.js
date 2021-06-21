const Sequelize = require('sequelize');
const db = require('../../database/dbinit');

const Student = db.sequelize.define('student', {

    firstname: {

        type: Sequelize.STRING,
        allowNull: false,
        validate: {

            notEmpty: true,

        }

    },

    lastname: {

        type: Sequelize.STRING,
        allowNull: false,
        validate: {

            notEmpty: true,

        }

    },

    email: {

        type: Sequelize.STRING,
        validate: {

            isEmail: true,
            notEmpty: true,

        }

    },

    imgUrl: {

        type: Sequelize.STRING,
        defaultValue: "https://cdn.pixabay.com/photo/2013/07/12/17/47/test-pattern-152459_960_720.png"
    },

    gpa: {

        type: Sequelize.FLOAT,
        validate: {

            len: [0.0, 4.0]

        }

    },

    collegeID: {

        type: Sequelize.STRING,
        allowNull: false,
        validate: {

            notEmpty: true,

        }

    }
    
})

module.exports = Student;