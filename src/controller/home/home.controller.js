const sequelize = require('../../model/connectSequelizeMYSQL');
const EventModel = sequelize.import('../../model/event');

module.exports = (req ,res) => {
    return res.render('home', {
        title: 'home',
        msg: 'Bem vindo ao app de eventos'
    });
};