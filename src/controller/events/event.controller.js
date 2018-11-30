const sequelize = require('../../model/connectSequelizeMYSQL');
const Event = sequelize.import('../../model/event')

module.exports.new = (req, res) => {

    res.render('new', {
        title: 'New event',
        msg: 'Criando novo evento',
        event: new Event()
    });
}

module.exports.create = async (req, res) => {

    await Event.create(req.body);

    res.redirect('/events');
};

module.exports.find = async (req, res) => {

    const events = await Event.findAll();

    res.render('events', {
        title: 'Lista de eventos',
        msg: 'Todos Eventos',
        events: events
    });
};

module.exports.show = async (req, res) => {

    const { id } = req.params;

    const event = await Event.findById(id);

    res.render('event', {
        title: "Event",
        msg: "Event",
        event: event
    });
};