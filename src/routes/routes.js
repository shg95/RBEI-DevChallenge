const express = require('express');
const route = express.Router();
const bodyParser = require('body-parser');
route.use(bodyParser.json());
route.use(bodyParser.urlencoded({ extended : true}));
const web3 = require("../controller/controller.web3")
const web3Controller = new web3();

route.post('/registerUser',web3Controller.registerUser)
route.post('/incentiveOrPenalty',web3Controller.incentiveAndPenalty);
route.post('/updateFootSteps',web3Controller.updateFootSteps);
route.get('/getBalances',web3Controller.getBalances);

module.exports = route;