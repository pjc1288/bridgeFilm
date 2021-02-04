const dotenv = require('dotenv')
dotenv.config();
const llave = process.env.JWT_SECRET
const helpers={};
const jwt = require('jsonwebtoken')

helpers.isAuth = ((req, res, next) => {
    // Tenemos que acceder aquí a la cookie y meter el valor en el token, ahí ya lo verifica, luego meter isAuth a cada ruta
    const token = req.cookies.jwt;
    if (token) {
      jwt.verify(token, llave, (err, decoded) => {      
        if (err) {
            res.status(403);    
        } else {
          req.decoded = decoded;    
          next();
        }
      });
    } else {
        res.status(200).render('login', {value: 'Vuelva a Logearse'});
    }
  });

  module.exports = helpers;