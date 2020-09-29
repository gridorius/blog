const express = require("express");
const Controllers = require('./js/Controllers');
const app = express();
app.set("view engine", "hbs");

app.get("/", Controllers.load('StaticController', 'index'));

module.exports = app;
