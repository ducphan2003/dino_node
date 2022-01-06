const res = require('express/lib/response');
const Flower = require('../models/Flower')
const { mongooseToObject } = require('../../util/mongoose')

class FlowerController {
    // [GET] /flowers/:slug
    show(req, res, next) {
        Flower.findOne({ slug: req.params.slug })
            .then(flower =>
                res.render('flowers/show', { flower: mongooseToObject(flower) })
            )
            .catch(next)
    }
    // [GET] /courses/create
    create(req, res, next) {
        res.render('flowers/create')
    }
    // [POST] /courses/store
    store(req, res, next) {
        /* res.json(req.body) */
        const formData = req.body
        formData.image = `https://2sao.vietnamnetjsc.vn/images/2017/05/13/17/36/hoa-thach-thao-2.png`
        const flower = new Flower(formData)
        flower.save()
            .then(() => res.redirect('/'))
            .catch(error => {

            })
    } 
}

module.exports = new FlowerController();
