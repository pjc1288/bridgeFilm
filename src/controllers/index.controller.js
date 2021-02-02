const fetch = require('node-fetch')
const Film = require('./films.controller');  
const db =require ('../models/filmdb')
const indexCtrl ={};


indexCtrl.renderIndex= (req, res)=>{
    res.render('index',{title: 'Funciono'})
};

indexCtrl.renderSearch= (req, res)=>{
    res.render('search')
};
indexCtrl.renderAdminDash= (req, res)=>{
    res.render('adminDash',{title: 'Admin Dash'})
};
indexCtrl.renderUserDash= (req, res)=>{
    res.render('userDash',{title: 'User Dash'})
};


indexCtrl.renderFilm= (req, res)=>{
    let titulo = req.params.titulo
    let API_KEY = '9ad49d3'
    fetch ('http://www.omdbapi.com/?i='+ titulo + '&apikey=' + API_KEY)
    .then (data => data.json())
    .then (films => {
        console.log (films.Title);
        console.log (films.Poster);
        res.render('film',{filmTitle:films.Title, poster:films.Poster, cast:films.Actors, plot:films.Plot, runtime:films.Runtime, released:films.Released, genre:films.Genre, country:films.Country, writer:films.Writer, director:films.Director, rating:films.imdbRating/2})}) 
};


indexCtrl.redirectFilm= (req, res)=>{
    let titulo = req.body.titulo
    res.redirect ('film/' + titulo)
};


indexCtrl.renderFilmResults= async (req, res)=>{
    let titulo = req.params.titulo
    let API_KEY = '9ad49d3'
    console.log(titulo)

    const films = await db.find({Title: new RegExp(titulo)});
    console.log(films);

    const respuesta = await fetch ('http://www.omdbapi.com/?s='+ titulo + '&apikey=' + API_KEY)
    .then (data => data.json())
    .then (films => {
        
    let foundMovies = (films['Search']);
      return foundMovies;
    }) 

res.render ('films-results' , {movies:respuesta.concat(films)});

}


indexCtrl.redirectFilmResults = (req, res)=>{
    let titulo = req.body.titulo
    res.redirect ('films-results/' + titulo)
};

/* indexCtrl.renderEditFilm= (req, res)=>{
   res.render('edit-film')
}

indexCtrl.renderAddFilm= (req, res)=>{
   res.render('add-film')
} */

indexCtrl.renderSearchX= (req, res)=>{
    res.render('searchX')
};


module.exports = indexCtrl;