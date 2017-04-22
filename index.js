'use strict';

var restify = require('restify');
var os = require('os');
var serviceName = 'hit-counter';
var serverName = serviceName + '-pid-' + process.pid;
var hitCount = 0;
var PORT = process.env.HITCOUNTER_PORT || 3000;

function add(req, res, next) {
    hitCount++;
    res.send(200, getStatus(req));
    next();
}

function sub(req, res, next) {
    hitCount = hitCount > 1 ? hitCount -1 : 0;
    res.send(200, getStatus(req));
    next();
}

function zero(req, res, next) {
    hitCount = 0;
    res.send(200, getStatus(req));
    next();
}


function health(req, res, next) {
    res.send(200, getStatus(req));
    next();
}

function getStatus(req) {
    return {
        'route': req.path,
        'hits' : hitCount,
        'name': serverName,
        'host': os.hostname()
    }
}

var server = restify.createServer({
    'name': serverName
});




server.use(restify.bodyParser({ mapParams: true }));

server.get('/add/', add);
server.get('/', add);
server.get('/health/', health);
server.get('/sub/', sub);
server.get('/zero/', zero);

server.listen(PORT, function () {
    console.log('%s listening at %s', server.name, server.url);
});


