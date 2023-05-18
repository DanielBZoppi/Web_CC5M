var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    quantity: {type: Number, required: true, default:1},
    livro: {type: Schema.Types.ObjectId, ref: 'livro'},
});

module.exports = mongoose.model('carrinho', schema);