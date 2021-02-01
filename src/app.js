//const bodyParser = require('body-parser');
const dotenv = require('dotenv')
dotenv.config()
const express= require('express')
const app = express();
const path = require('path')
const fetch = require('node-fetch');
const methodOverride =require('method-override')



//Configuración de express
app.set ('port', process.env.PORT || 3000)
app.set('views',path.join(__dirname, 'views')) //donde guardo mis archivos pug
app.set('view engine', 'pug')


//middlewares
/* app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
})); */

app.use(express.urlencoded({extended:false}));
app.use(methodOverride('_method'))

// Global variables (son variable las cuales podemos acceder en todo el proyecto)

//Rutas

app.use(require('./routes/index.routes'));
app.use(require('./routes/films.routes'));



//Statics Files

app.use(express.static(path.join(__dirname,'public')))



//Listening Server
app.listen (app.get('port'), () =>{
    console.log('Server on port', app.get('port'));
})