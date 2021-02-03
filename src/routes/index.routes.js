const express = require ('express')
const router = express.Router()
const fetch = require('node-fetch');
require('../models/database')
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
} =require('../controllers/index.controller')

router.get('/', renderIndex );

router.get('/search', renderSearch);

router.get('/userDash', renderUserDash);

router.get('/adminDash', renderAdminDash);

router.get('/favorites', renderFavorites);



router.get('/film/:titulo', renderFilm );
router.post('/film', redirectFilm);

router.get('/films-results/:titulo', renderFilmResults);
router.post('/films-results', redirectFilmResults);

router.get('/searchX', renderSearchX);


module.exports = router;