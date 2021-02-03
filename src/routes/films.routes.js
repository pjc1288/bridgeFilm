const {Router} = require('express')
const router = Router()
const passport = require('passport')
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

const {isAuthenticated} = require('../helpers/auth')
//New Film
router.get('/films/add', isAuthenticated, renderFilmForm )
router.post('/films/new-film', createNewFilm)

// Get All Films
router.get('/films', isAuthenticated, renderFilmsDB  )

// Get Some Films
router.get ('/films/:titulo',isAuthenticated, renderFilmsDBX)
router.post ('/films/:titulo', redirectFilmsDBX)

// Get A Film detail
router.get ('/films/:imdb',isAuthenticated, renderFilmDetailBX)
router.post ('/films/:imdb', redirectFilmDetailDBX)

//Edit Films
router.get('/films/edit/:id',isAuthenticated, renderEditForm)
router.put('/films/edit/:id', updateFilm)

//Delate Film

router.delete('/films/delete/:id',isAuthenticated, deleteFilm)




module.exports = router