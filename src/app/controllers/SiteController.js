const Course = require('../models/Course')
const { mutipleMongooseToObject } = require('../../util/mongoose')

class SiteController {
    // [GET] /
    home(req, res) {
        Course.find({})
            .then((courses) =>
                res.render('home', {
                    courses: mutipleMongooseToObject(courses),
                }),
            )
            .catch((err) => {
                res.status(400).json({ error: 'Internal Server Error' })
            })
    }

    // [GET] /search
    search(req, res) {
        res.send('SEARCH')
    }
}

module.exports = new SiteController()
