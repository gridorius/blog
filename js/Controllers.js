class Controllers{
    constructor(controller, method) {
        this.controller = controller;
        this.method = method;
    }

    static load(controller, method){
        let cont = new this(controller, method);

        return function (request, response){
            cont.exec(request, response);
        }
    }

    exec(request, response){
        const Controller = require('../controllers/' + this.controller);
        Controller[this.method](request, response);
    }
}

module.exports = Controllers;