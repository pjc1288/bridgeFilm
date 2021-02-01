const fetch = require('node-fetch')
const Film = require('./films.controller');  
const indexCtrl ={};


indexCtrl.renderIndex= (req, res)=>{
    res.render('index',{title: 'Funciono'})
};

indexCtrl.renderSearch= (req, res)=>{
    res.render('search')
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




indexCtrl.renderFilmResults= (req, res)=>{
    let titulo = req.params.titulo
    let API_KEY = '9ad49d3'

    // if( titulo = true || Film == true )

    /* Film.renderFilmsDB(req,res);  */
//si no ! encuentras nada en mongo ni en omdb entonces pintas no se ha encontrado ELSE me traes resultados tanto de omdb como de api
    fetch ('http://www.omdbapi.com/?s='+ titulo + '&apikey=' + API_KEY)
    .then (data => data.json())
    .then (films => {
        
      let foundMovies = (films['Search']);
      res.render ('films-results' , {movies:foundMovies});
})}


indexCtrl.redirectFilmResults = (req, res)=>{
    let titulo = req.body.titulo
    res.redirect ('films-results/' + titulo)
};

indexCtrl.renderEditFilm= (req, res)=>{
   res.render('edit-film')
}

indexCtrl.renderAddFilm= (req, res)=>{
   res.render('add-film')
}

indexCtrl.renderSearchX= (req, res)=>{
    res.render('searchX')
};


module.exports = indexCtrl;