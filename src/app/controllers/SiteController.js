const res = require('express/lib/response');
const Flower = require('../models/Flower')
const {multipleMongooseToObject} = require('../../util/mongoose')

class SiteController {
    // [GET] /
    index(req, res, next) {
        /* res.render('home'); */
        Flower.find({})
            .then(flowers => {
                res.render('home', {
                    flowers: multipleMongooseToObject(flowers)
                })
            })
            .catch(next)
    }

    // [GET] /search
    search(req, res) {
        res.render('search');
    }

    news(req, res) {
        res.render('news');
    }
}

module.exports = new SiteController();
