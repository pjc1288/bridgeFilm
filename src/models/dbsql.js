const mariadb = require('mariadb');
const pool = mariadb.createPool({
    host: 'localhost', 
    user: 'root', 
    password:'',
    connectionLimit: 5,
    database:'dbsql'
});

// Creacion tabla users
// CREATE TABLE dbsql.users (
//     userID int AUTO_INCREMENT,
//     FirstName varchar(255) NOT NULL,
//     email varchar(255) NOT NULL,
//     pw varchar(255)NOT NULL,
//     PRIMARY KEY (userID)
// );


// Creacion tabla favoritos
// CREATE TABLE dbsql.Favorites (
//     IDfavorites int NOT NULL AUTO_INCREMENT,
//     userID int NOT NULL,
//     fuenteDatos varchar(255) NOT NULL,
//     PRIMARY KEY (IDfavorites),
//     FOREIGN KEY (userID) REFERENCES dbsql.users(userID)
//     );

// creacion de usuarios
// INSERT INTO dbsql.users
// (Firstname,email,pw)
// VALUES ('Pepe' ,'pepito@gmail.com',123456);


//CREACION DE FAVORITO
exports.createFavorite = async (movie) => {
    let conn;
    try {
      conn = await pool.getConnection();

      const query = "INSERT INTO favorites(userID,fuenteDatos) VALUES ((SELECT userID from users WHERE Email=?),?)";
      //;)
      const datos = [movie.email,movie.fuenteDatos];
      const res = await conn.query(query,datos); // ejecuta query + datos
      console.log(res);
      return res; 
  
    } catch (err) {
        console.log(err);
        return null;
    } finally {
      if (conn) return conn.end();
    }
}

let pelifavorita = {

    email:"yoli@gmail.com",
    fuenteDatos: "sconseguido"
    
}

//createFavorite(pelifavorita);



//VISTA DE PELIS FAVORITAS
exports.getFavorite = async(email) => {
    let conn;
    let resultado;
    try {
      conn = await pool.getConnection();
      let res = await conn.query(" SELECT favorites.fuenteDatos FROM favorites INNER JOIN users  ON favorites.userID=users.userID  WHERE users.email =? ;",[email]); // DEVUELVE TODO DE NEWS
      resultado = res;
    } catch (err) {
        console.log(err);
        resultado = null;
    } finally {
      if (conn) conn.end();
      return resultado;
    }
}


// getFavorite("yoli@gmail.com").then(data => console.log(data));



//BORRRAR PELI FAVORITO

exports.delFavorite = async (email, fuenteDatos) => {
    let conn;
    try {
      conn = await pool.getConnection();

      const query = " DELETE FROM favorites WHERE userID=(SELECT userID FROM users WHERE Email=?) AND fuenteDatos= ?";
      //;)
      const datos = [email,fuenteDatos];
      const res = await conn.query(query,datos); // ejecuta query + datos
      console.log(res);
      return res; 
  
    } catch (err) {
        console.log(err);
        return null;
    } finally {
      if (conn) return conn.end();
    }
}

// delFavorite("yoli@gmail.com","sdsda")
