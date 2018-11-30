const express = require('express');
const router = express.Router();
const eventController = require('./event.controller');

router.get('/new', eventController.new);

router.get('/event/:id', eventController.show);

router.get('/', eventController.find);

router.post('/', eventController.create);

module.exports = router;