const mongoose = require('mongoose')
const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017/blog_dev'

async function connect() {
    try {
        await mongoose.connect(uri)
        console.log('Connect successfully')
    } catch (error) {
        console.log('Connect failure')
    }
}

module.exports = { connect }
