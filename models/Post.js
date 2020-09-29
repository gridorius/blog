const mongoose = require("../js/MongooseConnect");
const Schema = mongoose.Schema;

const PostScheme = new Schema({
    name: {
        type: String,
        required: true
    },
    description: String,
    keywords: String,
    content: {
        type: String,
        required: true
    },
});

module.exports = mongoose.model('Post', PostScheme);