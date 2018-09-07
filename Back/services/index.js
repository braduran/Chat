var app = require('../ServerConfig');
var messages = require('./messages');

app.use('/message', messages);