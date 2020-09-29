const mongoose = require("../js/MongooseConnect");
const Schema = mongoose.Schema;

const CommentScheme = new Schema({
    postId: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    comment: {
        type: String,
        required: true
    },
});

module.exports = mongoose.model('Comment', CommentScheme);