var express = require('express');
var router = express.Router();
var api = require('./api');

router.get('/getUser', (req, res) => {
    api.getUser(req, res);
})

module.exports = router;