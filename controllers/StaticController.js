class StaticController{
    static index(req, res){
        res.render('index.hbs');
    }
}

module.exports = StaticController;