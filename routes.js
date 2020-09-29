const app = require('./AppInit');
const Controllers = require('./js/Controllers');


// routes
app.get("/", Controllers.load('StaticController', 'index'));







module.exports = app;
