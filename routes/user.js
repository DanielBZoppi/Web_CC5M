var express = require('express');
var router = express.Router();

var messaRoutes = require("../models/messages");


router.get('/node', function (req, res, next) {
    res.render('node');
})

module.exports = router; 