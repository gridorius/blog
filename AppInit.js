const express = require("express");
const expressHbs = require("express-handlebars");
const hbs = require("hbs");
const app = express();

app.engine("hbs", expressHbs(
    {
        layoutsDir: "views",
        defaultLayout: "layout",
        extname: "hbs"
    }
))

app.set("view engine", "hbs");
app.set("views", "views");
hbs.registerPartials(__dirname + "/partials");


module.exports = app;