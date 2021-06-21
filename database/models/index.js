const db = require('../dbinit');
const Campus = require('./Restaurant');

db.sequelize.sync({force: false});

module.exports = {

    Restaurant
    
}