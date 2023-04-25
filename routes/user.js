var express = require('express');
var router = express.Router();

var messaRoutes = require("../models/message");


router.get('/node', function (req, res, next) {
    res.render('node');
})

module.exports = router; 