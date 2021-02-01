const {Router} = require('express')
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
} = require('../controllers/films.controller');


//New Film
router.get('/films/add', renderFilmForm )
router.post('/films/new-film', createNewFilm)

// Get All Films
router.get('/films', renderFilmsDB  )

// Get Some Films
router.get ('/films/:titulo', renderFilmsDBX)
router.post ('/films/:titulo', redirectFilmsDBX)

//Edit Films
router.get('/films/edit/:id', renderEditForm)
router.put('/films/edit/:id', updateFilm)

//Delate Film

router.delete('/films/delete/:id', deleteFilm)




module.exports = router