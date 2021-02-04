const express= require('express')
const path = require('path')
const mysql = require('mysql');
const dotenv = require('dotenv')
const cookieParser = require('cookie-parser');

dotenv.config({path:'./.env'})

const app = express();
const fetch = require('node-fetch');
const methodOverride =require('method-override')

const db = mysql.createConnection({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE
});

//Configuración de express
app.set ('port', process.env.PORT || 5001)
app.set('views',path.join(__dirname, 'views')) //donde guardo mis archivos pug
app.set('view engine', 'pug')

//middlewares

app.use(express.urlencoded({extended:false}));
app.use(methodOverride('_method'))
app.use(express.json());
app.use(cookieParser());

//MySQL connection

db.connect( (error) =>{
  if(error){
      console.log(error)
  }else{
      console.log("My SQL connected...")
  }
})

//Rutas

app.use(require('./routes/index.routes'));
app.use(require('./routes/films.routes'));
app.use('/auth', require('./routes/auth'));

//Statics Files

app.use(express.static(path.join(__dirname,'public')))

//Listening Server
app.listen (app.get('port'), () =>{
    console.log('Server on port', app.get('port'));
})