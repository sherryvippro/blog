const Course = require('../models/Course')
const { mongooseToObject, multipleMongooseToObject } = require('../../util/mongoose')

class CourseController {
    // [GET] /courses/:slug
    show(req, res) {
        Course.findOne({ slug: req.params.slug })
            .then((course) => {
                res.render('courses/show', {
                    course: mongooseToObject(course),
                })
            })
            .catch((err) => res.status(400).json({ error: 'Internal Server Error' }))
    }

    // [GET] /courses/create
    create(req, res) {
        res.render('courses/create')
    }

    // [POST] /courses/store
    store(req, res) {
        const formData = { ...req.body }
        formData.image = `https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`
        const course = new Course(formData)
        course
            .save()
            .then(() => res.redirect('/'))
            .catch((err) => {
                res.status(400).json({ error: err })
            })
    }

    //[GET] /courses/:id/edit
    edit(req, res, next) {
        Course.findById(req.params.id)
            .then((course) => {
                res.render('courses/edit', { course: mongooseToObject(course) })
            })
            .catch(next)
    }

    // [PUT] /courses/:id
    update(req, res, next) {
        Course.updateOne({ _id: req.params.id }, req.body)
            .then((courses) =>
                res.redirect('/me/stored/courses', { courses: multipleMongooseToObject(courses) }),
            )
            .catch(next)
    }
}

module.exports = new CourseController()
