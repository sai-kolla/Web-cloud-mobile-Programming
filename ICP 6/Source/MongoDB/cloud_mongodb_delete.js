/**
 * Created by Vijaya Yeruva on 5/27/2017.
 */

var http = require('http');
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb+srv://icp6:S123@cluster0-r2jf8.mongodb.net/test?retryWrites=true&w=majority';

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbase = db.db("icp6");
    var myquery = { address: 'Main Road 989' };
    dbase.collection("Collection1").deleteOne(myquery, function(err, obj) {
        if (err) throw err;
        console.log(obj.result.n + " document(s) deleted");
        db.close();
    });
});