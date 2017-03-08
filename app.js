var express = require('express');
var app = express();

var nA;
var nB;

app.get('/numeroA/:a', function (req, res) {
    nA = parseInt(req.params.a);
    res.send('<h1>Numero ' + nA + ' guardado!</h1>');
});

app.get('/numeroB/:b', function (req, res) {
    nB = parseInt(req.params.b);
    res.send('<h1>Numero ' + nB + ' guardado!</h1>');
});

app.get('/sumarAB', function (req, res) {
    var resultado = nA + nB;
    res.send('<h1>La suma entre ' + nA + ' y ' + nB + ' es ' + resultado + '!</h1>');
});

app.get('/restarAB', function (req, res) {
    var resultado = nA - nB;
    res.send('<h1>La resta entre ' + nA + ' y ' + nB + ' es ' + resultado + '!</h1>');
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});