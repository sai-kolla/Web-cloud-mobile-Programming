/**
 * Created by Vijaya Yeruva on 5/27/2017.
 */
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://icp6:Sai123@localhost:27017/myproject';

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    db.createCollection("Collection2", function(err, res) {
        if (err) throw err;
        console.log("Collection created!");
        db.close();
    });
});
