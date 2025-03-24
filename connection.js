const mongoose = require('mongoose');
// avoid te warning we write below line
mongoose.set('strictQuery', true);

async function connectMongoDb(url) {
    return mongoose
        .connect(url)

}

module.exports = {
    connectMongoDb,
}