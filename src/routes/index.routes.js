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
    renderEditFilm,
    renderAddFilm} =require('../controllers/index.controller')

router.get('/', renderIndex );

router.get('/search', renderSearch);

router.get('/film/:titulo', renderFilm );
router.post('/film', redirectFilm);

router.get('/films-results/:titulo', renderFilmResults);
router.post('/films-results', redirectFilmResults);

router.get('/edit-film', renderEditFilm);

router.get('/add-film', renderAddFilm);

router.get('/searchX', renderSearchX);


module.exports = router;