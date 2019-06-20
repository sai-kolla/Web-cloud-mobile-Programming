/**
 * Created by Vijaya Yeruva on 5/27/2017.
 */

var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb+srv://icp6:S123@cluster0-r2jf8.mongodb.net/test?retryWrites=true&w=majority';

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    console.log("Connected correctly to server");
    db.close();
});

//mongodb://<dbuser>:<dbpassword>@ds239128.mlab.com:39128/<dbname>