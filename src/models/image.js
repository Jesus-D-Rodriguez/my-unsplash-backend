const {Schema, model} = require("mongoose");

const imageSchema = new Schema({
    title: String,
    imageUrl:  String

}, { collection: 'images' });

const Image = model('Image', imageSchema);
module.exports = Image;