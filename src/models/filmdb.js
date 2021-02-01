const {Schema, model} = require('mongoose')

const FilmScheme = new Schema({
    Title:{
        type: String,
        // required: true
    },
    Year:{
        type: Number,
    },
    Director:{
        type: String,
    },
    Genre:{
        type: String,
    },
    Runtime:{
        type: Number,
    },
    Poster:{

    },
    
    },{timestamps:true})

module.exports = model('Film', FilmScheme, 'Films')
