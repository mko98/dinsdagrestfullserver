/**
 * Created by Mko98 on 2-5-2017.
 */
var express = require('express');
var router = express.Router();


var users = [
    {
        name: "Max",
        info: {
            email: "mkoning7@avans.nl",
            nick: "developer"
        }
    },
    {

        name : "Robin",
        info : {
            email: "Robin@avans.nl",
            nick: "Bug fixer"
        }
    }
]

router.get('/users', function (req, res) {
    res.json(users);

})



router.get('/help', function (req, res) {
    res.json({"msg": "Help functie"})

})

router.get('*', function (req, res) {
    res.json({"message": "Thank you for using API v3"})

})

module.exports = router;

