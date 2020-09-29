class StaticController{
    static index(req, res){
        res.send([123,123]);
    }
}

module.exports = StaticController;