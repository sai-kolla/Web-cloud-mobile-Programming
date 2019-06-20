/**
 * Created by Vijaya Yeruva on 5/27/2017.
 */

var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb+srv://icp6:S123@cluster0-r2jf8.mongodb.net/test?retryWrites=False&w=majority';

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbase = db.db("icp6");
    var myquery = { address: /^S/ };
    var newvalues = {$set: {name: "Nagarjuna"} };
    var myoptions = { multi: true };
    dbase.collection("Collection1").updateMany(myquery, newvalues, myoptions, function(err, res) {
        if (err) throw err;
        console.log(res.result.nModified + " record(s) updated");
        db.close();
    });
});
