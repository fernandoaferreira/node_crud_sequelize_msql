const rotaHome = require('./controller/home/home.router');
const rotaEvents = require('./controller/events/event.router');

module.exports = (app) => {

    app.use('/', rotaHome)
    app.use('/events', rotaEvents)
    
}