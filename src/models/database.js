const mongoose = require("mongoose");


const {NOTES_APP_MONGODB_HOST, NOTES_APP_MONGODB_DATABASE}= process.env
const MONGODB_URI = `mongodb://${NOTES_APP_MONGODB_HOST}/${NOTES_APP_MONGODB_DATABASE}`

//const MONGODB_URI = `mongodb://localhost:27017/`;

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,}

mongoose.connect(MONGODB_URI, options)
    .then(db =>console.log('Database is connected'))
    .catch(err=>console.log(err));