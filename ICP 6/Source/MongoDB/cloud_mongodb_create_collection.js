/**
 * Created by Vijaya Yeruva on 5/27/2017.
 */
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb+srv://icp6:S123@cluster0-r2jf8.mongodb.net/test?retryWrites=true&w=majority';

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbase = db.db("webicp6");
    dbase.createCollection("Collection1", function(err, res) {
        if (err) throw err;
        console.log("Collection created!");
        db.close();
    });
});
