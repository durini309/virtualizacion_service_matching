var express = require('express');
var router = express.Router();

const matchingController = require('../controllers').matching_controller;

router.get('/', function(req, res){  
    console.log(req.query.category);
    matchingController.getCampaigns(req, res);
})

module.exports = router;