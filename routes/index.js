var express = require('express');
var userDao = require('../public/javascripts/dao/userDao');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login', { title: 'Kyle Qu' });
    return;
});

router.get('/home',function(req, res, next){
    res.render('index');
});

router.get('/about',function(req, res, next){
    res.render('about');
});

router.get('/gallery',function(req, res, next){
    res.render('gallery');
});

router.get('/faq',function(req, res, next){
    res.render('faq');
});

router.get('/typography',function(req, res, next){
    res.render('typography');
});

router.get('/contact',function(req, res, next){
    res.render('contact');
});

router.post('/loginHander',function(req, res){
    var data = req.body;
    if(data.username!==undefined){
        var userName = data.username;
        var password = data.password;
        var validatePwd = '';
        userDao.getUserByName(userName, function(result){
            if(result.length==0){
                res.render('login', { title: 'Please register first' });
                return;
            }
            if(result[0].passWord==password){
                res.render('index',{userName:userName});
                return;
            }

            res.render('login', { title: 'Your password is wrong.' });
            return;
        });
       }
  return;
});

module.exports = router;
