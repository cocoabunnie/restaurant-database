const db = require('../dbinit');
const Restaurant = require('./Restaurant');


db.sequelize.sync({force: false});

module.exports = {

    Restaurant
    
}