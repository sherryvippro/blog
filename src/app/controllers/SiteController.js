const Course = require('../models/Course')

class SiteController {
    // [GET] /
    home(req, res) {
        Course.find({})
            .then((courses) => {
                res.json(courses)
            })
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
