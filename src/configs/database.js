// get the client
import mysql from 'mysql2'
// create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'thuyketu'
});

// // simple query
// connection.query(
//   'SELECT * FROM `User` ',
//   function(err, results, fields) {
//     console.log(results); // results contains rows returned by server
//     let rows = results.map((row) => {return row});
//     console.log(results[0]);
//   }
// );

export default connection