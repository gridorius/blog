const express = require("express");

const app = express();
app.set("view engine", "hbs");

app.get("/", function(request, response){
    response.send(user)
});
// начинаем прослушивать подключения на 3000 порту
app.listen(3000);
