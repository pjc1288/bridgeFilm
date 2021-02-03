const filmCtrl ={}

const Film =require ('../models/filmdb') //esto lo tenemos por lo que ya esta enganchando con la BBDD

filmCtrl.renderFilmForm = (req, res)=>{
    res.render ('films/new-film')
}

filmCtrl.createNewFilm = async (req, res)=>{

    const {Title, Year, imdbID, Director, Genre, Runtime, Poster} =req.body

    const newFilm = new Film ({
                            Title, 
                            Year,
                            imdbID,
                            Director,
                            Genre,
                            Runtime,
                            Poster,
                            })

    await newFilm.save();
    res.redirect ('/films')
}

filmCtrl.renderFilmsDB = async (req, res)=>{
    const films = await Film.find();
    res.render('films/all-films', {films})
}

filmCtrl.renderEditForm = async (req, res)=>{
    const film = await Film.findById(req.params.id)
    res.render ('films/edit-film',{film} );
}

filmCtrl.updateFilm = async (req, res)=>{
    await Film.findByIdAndUpdate(req.params.id, {
        Title:req.body.Title, 
        Year:req.body.Year, 
        imdbID:req.body.imdbID, 
        Director:req.body.Director, 
        Genre:req.body.Genre, 
        Runtime:req.body.Runtime,
        Poster:req.body.Poster,
    })
    console.log(req.body)
    res.redirect ('/films')
}

filmCtrl.deleteFilm  = async (req, res)=>{
    await Film.findByIdAndDelete(req.params.id)

    res.redirect ('/films')
}

filmCtrl.renderFilmsDBX = async (req, res)=>{
    let titulo = req.params.titulo
    
    const films = await Film.find({Title: new RegExp(titulo)});
    
    res.render('films/all-films', {films})
}



filmCtrl.renderFilmDetailBX = async (req, res)=>{
    let imdbID = req.params.imdbID
    const films = await Film.find({imdbID:imdbID});
    res.render('film/', {films})
}




filmCtrl.redirectFilmDetailDBX  = (req, res)=>{
    let titulo = req.body.titulo
    res.redirect ('films/' + titulo)
};




filmCtrl.redirectFilmsDBX  = (req, res)=>{
    let titulo = req.body.titulo
    res.redirect ('/films/' + titulo)
};


module.exports = filmCtrl