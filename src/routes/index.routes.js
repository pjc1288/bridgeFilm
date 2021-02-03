const express = require ('express')
const router = express.Router()
const fetch = require('node-fetch');
require('../models/database')
const passport = require('passport')
const{
    renderIndex, 
    renderSearch, 
    renderSearchX, 
    renderFilm, 
    redirectFilm, 
    renderFilmResults,
    redirectFilmResults,
    renderAdminDash, 
    renderUserDash,
    renderFavorites,
    renderLogin,
    renderRegister,
} =require('../controllers/index.controller')
const {isAuthenticated} = require('../helpers/auth')

router.get('/',isAuthenticated,renderIndex );

router.get('/search',isAuthenticated, renderSearch);


router.get('/register', renderRegister)

router.get('/login', renderLogin);




router.get('/userDash', isAuthenticated, renderUserDash);

router.get('/adminDash', isAuthenticated, renderAdminDash);

router.get('/favorites', isAuthenticated, renderFavorites);

router.get('/film/:titulo', isAuthenticated, renderFilm );
router.post('/film', redirectFilm);

router.get('/films-results/:titulo', isAuthenticated, renderFilmResults);
router.post('/films-results', redirectFilmResults);

router.get('/searchX', isAuthenticated, renderSearchX);





// router.get('/login', (req, res) => {
//     res.render('login')
// });


module.exports = router;