/**
 * Created by Vijaya Yeruva on 5/27/2017.
 */

var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://icp6:Sai123@ds213705.mlab.com:13705/webicp6';

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    db.dropDatabase();
    console.log("Database deleted");
});