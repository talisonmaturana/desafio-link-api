const { Router } = require('express');
const DealController = require('./app/controllers/DealController');

const routes = new Router();

routes.get('/deals', DealController.getFromPipePostToBling);

module.exports = routes;
