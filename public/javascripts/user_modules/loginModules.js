/**
 * Created by kyleq on 11/4/2015.
 */
var express = requires('express');
var app = express();

app.all('/loginHander',function(req, res){
   var data = req.body;
   if(data.userName!==undefined){
      var userName = data.userName;
      var password = data.password;

      if(userName=='kyleq'){
          res.redirect('success');
      }
      res.redirect('error');
   }
})

module.exports = app;