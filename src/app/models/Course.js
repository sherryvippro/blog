const { default: mongoose } = require('mongoose')
const slug = require('mongoose-slug-updater')
const Schema = mongoose.Schema

mongoose.plugin(slug)

const Course = new Schema(
    {
        name: { type: String, default: '' },
        description: String,
        image: String,
        videoId: String,
        level: String,
        slug: { type: String, slug: 'name', unique: true },
    },
    {
        timestamps: true,
    },
)

module.exports = mongoose.model('Course', Course)
