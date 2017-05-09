/**
 * Created by Mko98 on 2-5-2017.
 */
var express = require('express');
var router = express.Router();
var path = require('path');

router.get('*', function (req, res) {
    res.status(200);
    res.json({"description": "Project X API version 2. Please use API version 3"});

});

module.exports = router;