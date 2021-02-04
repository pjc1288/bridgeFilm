const express = require ('express')
const router = express.Router()
const fetch = require('node-fetch');
require('../models/database');
 
const {isAuth} = require('../helpers/auth')

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

router.get('/', isAuth, renderIndex );

router.get('/search', isAuth, renderSearch);


router.get('/register', renderRegister)
router.get('/login', renderLogin);


router.get('/userDash', isAuth, renderUserDash);

router.get('/adminDash', isAuth, renderAdminDash);

router.get('/favorites', isAuth, renderFavorites);

router.get('/film/:titulo', isAuth, renderFilm );
router.post('/film', isAuth, redirectFilm);

router.get('/films-results/:titulo', isAuth, renderFilmResults);
router.post('/films-results', isAuth, redirectFilmResults);

router.get('/searchX', isAuth, renderSearchX);

// router.get('/login', (req, res) => {
//     res.render('login')
// });

module.exports = router;