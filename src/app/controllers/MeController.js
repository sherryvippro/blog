const Course = require('../models/Course')
const dayjs = require('dayjs')
const { multipleMongooseToObject } = require('../../util/mongoose')

class MeController {
    // [GET] /me/stored/courses
    storedCourses(req, res) {
        Course.find({})
            .then((courses) => {
                const formatCourses = courses.map((course) => {
                    course.createdAt = dayjs(course.createdAt).format('DD-MM-YY HH:mm:ss')
                    return course
                })

                res.render('me/stored-courses', {
                    courses: multipleMongooseToObject(formatCourses),
                })
            })
            .catch((err) => res.status(400).json({ error: 'Internal Server Error' }))
    }
}

module.exports = new MeController()
