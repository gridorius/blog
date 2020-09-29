const mongoose = require("../js/MongooseConnect");
const Schema = mongoose.Schema;

const UserScheme = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
});

module.exports = mongoose.model('User', UserScheme);