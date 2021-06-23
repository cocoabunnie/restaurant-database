const db = require('../dbinit');
const Reservation = require('./Reservation');


db.sequelize.sync({force: false});


module.exports = {

    Reservation
    
}