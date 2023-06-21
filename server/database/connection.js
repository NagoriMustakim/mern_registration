const mongoose = require('mongoose')
const { MongoMemoryServer } = require('mongodb-memory-server')

async function connect() {
    const mongodb = new MongoMemoryServer()
    await mongodb.start()
    const mongo_URI = mongodb.getUri()
    const db = await mongoose.connect(mongo_URI)
    console.log("mongodb connected")
    return db


}

module.exports = connect