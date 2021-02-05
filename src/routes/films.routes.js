const {Router} = require('express');
const router = Router()

const{ 
    renderFilmForm, 
    createNewFilm, 
    renderFilmsDB, 
    renderEditForm, 
    updateFilm, 
    deleteFilm, 
    renderFilmsDBX,
    redirectFilmsDBX,
    renderFilmDetailBX,
    redirectFilmDetailDBX,
} = require('../controllers/films.controller');

const {isAuth} = require('../helpers/auth')

//New Film
router.get('/films/add', isAuth, renderFilmForm )
router.post('/films/new-film', isAuth, createNewFilm)

// Get All Films
router.get('/films', renderFilmsDB  )

// Get Some Films
router.get ('/films/:titulo', isAuth, renderFilmsDBX)
router.post ('/films/:titulo', redirectFilmsDBX)

// Get A Film detail
router.get ('/films/:imdb', isAuth, renderFilmDetailBX)
router.post ('/films/:imdb', redirectFilmDetailDBX)

//Edit Films
router.get('/films/edit/:id', isAuth, renderEditForm)
router.put('/films/edit/:id', updateFilm)

//Delate Film

router.delete('/films/delete/:id', isAuth, deleteFilm)

module.exports = router