var express = require('express');
var router = express.Router();

var User = require("../models/user");


router.get('/node', function (req, res, next) {
    res.render('node');
})

router.get('/nodeb', function (req, res, next) {
    User.findOne({}, function (err, documents) {
        if (err) {
            return res.send("Error!")
        }
        res.render('node', {
            firstNameV: documents.firstName,
            lastNameV: documents.lastName,
            passwordV: documents.password,
            emailV: documents.email,
            messagesV: documents.messages,
        }
        )
    })
})

router.post('/node', function (req, res, next) {
    var emailVar = req.body.email;
    var userObject = new User({
        firstName: 'Harry',
        lastName: 'Potter',
        password: 'senha',
        email: emailVar
    })
    userObject.save();
    res.redirect('/node')
    console.log(req.body)
})

router.get('/', function (req, res, next) {
    res.render('index');
});

router.get('/login', function (req, res, next) {
    res.render('login');
});

router.get('/register', function (req, res, next) {
    res.render('register');
});

router.post('/register', function (req, res, next) {
    console.log(req.body)
});

router.get('/user', function (req, res, next) {
    res.render('user', { user: { name: "Harry" } });
});

module.exports = router; 
