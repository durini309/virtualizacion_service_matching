var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'zyklusdb.ciohag68m4xh.us-east-2.rds.amazonaws.com',
    user: 'zykladmin',
    password: 'zyklus2017!',
    database: 'advertising'
});

//Check if connection is OK
connection.connect(function(error) {
    if (error) {
        console.log('ERROR - Could not connect to the database: ' + error.message);
        conection.end();
        //Internal server error, return 500
        res.status(500).send({message: error.message});
    }
});

module.exports = {
    getAdvertisers(req, res){
        var query = 'SELECT * FROM advertisers';

        connection.query(query, function(error, results, fields) {
            //Close connection
            connection.end();

            if (error) {
                console.log('ERROR - Problem with provided query: ' + error.message);
                //Internal server error, return 500
                res.status(500).send({message: error.message});
            }
            
            //Successful query
            if(results.length == 0){
                //No records, return 404
                console.log('ERROR - No records found');
                res.status(400).send({message: 'ERROR - No records found'});
            }
            
            //Found records
            console.log('OK - Successful query: "' + query + '" with results: ' + results);
            res.status(200).send({message: results});
        }); 
    }
};