var express = require('express');
var router = express.Router();
var FavoriteColor = require('../models/colors.js')

/* GET home page. */
// router.get('/', function(req, res, next) {
//   FavoriteColor.find({}, function(err, data){
//     var myData = data;
//     console.log(JSON.stringify(myData, null, 4));
//     res.render('index', { title: 'Express', subtitle:'stuff', data: myData });
//   })
router.get('/',function(req,res,next){
  res.send("this works!")
});
//
// });

/* POST form contents */
router.post('/send', function(req, res, next){
  // res.send('got your data');
  res.render('backtrack', {message:'got your data', backtext:'back to index'});
  console.log('got some data');
  console.log(JSON.stringify(req.body, null, 4));
  var newFavoriteColor = new FavoriteColor({
    userName: req.body.name,
    favoriteColor: req.body.favoritecolor
  });
  console.log(JSON.stringify(newFavoriteColor, null, 4));

  newFavoriteColor.save(function(err){
    if (err){
      console.log(err)
    }
    else {
      console.log('saved '+ newFavoriteColor.userName + "'s favorite color to the db");
    }
  })
})

module.exports = router;
