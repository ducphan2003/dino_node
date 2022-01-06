const mongoose = require('mongoose')
const Schema = mongoose.Schema
const slug = require('mongoose-slug-generator')

mongoose.plugin(slug)

const Flower = new Schema({
    name: {type: String, required: true},
    description: {type: String},
    image: {type: String},
    stocks: {type: Number},
    slug: { type: String, slug: 'name', unique: true },
    videoId: {type: String, required: true},
}, {
    timestamps: true,
})

module.exports = mongoose.model('Flower', Flower)
