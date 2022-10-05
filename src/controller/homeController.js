import connection from '../configs/database'

let getHomepage = (req, res) => {
    let data = []
    connection.query(
        'SELECT * FROM `User` ',
        function(err, results, fields) {
          console.log(results); // results contains rows returned by server
          results.map((row) => {
            data.push({
                id: row.id,
                email: row.Email,
                address: row.address,
                firtsname: row.firtsname,
                lastname: row.lastname
            })
          });
          return res.render('index.ejs', { dataUser: JSON.stringify(data) })
        }
      );

    
   
}

module.exports = {
    getHomepage
}