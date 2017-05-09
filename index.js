/**
 * Created by Max on 5/2/2017.
 */
var http        = require('http');
var express     = require('express');

var app = express();

app.all('*', function (req, res, next) {
    console.log(JSON.stringify(req.headers));
    console.log(req.method + " " + req.url);
    next();
});

app.get('/api/v1/hello', function (req, res, next) {
    res.contentType('application/json');
    res.json(
        {
            "msg":"Hello to you all!! Hava a nice day.",
            "tempretuur": (
                10, 20, 30, "koud"
            )
        } );


});
//test voor sourcetree
app.use('/api/v1', require('./routes/routes_apiv1'));
app.use('/api/v2', require('./routes/routes_apiv2'));
app.use('/api/v3', require('./routes/routes_apiv3'));





//start server
app.listen(8080, function () {
    console.log('The magic happens at http://localhost:8080');
});