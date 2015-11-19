var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('mongoose opened!');
  var userSchema = new mongoose.Schema({
      userName:{type: String, unique: true}, 
      pwd:String
    }, 
    {collection: "usersName"}
    );
  var User = mongoose.model('accounts', userSchema);

  User.findOne({userName:"kyleq"}, function(err, doc){
    if(err) console.log(err);
    else console.log(doc.userName + ", password - " + doc.pwd);
  });

  var lisi = new User({userName:"LiSi", pwd:"123456"});
  lisi.save(function(err, doc){
    if(err)console.log(err);
    else console.log(doc.userName + ' saved');
  });  
});