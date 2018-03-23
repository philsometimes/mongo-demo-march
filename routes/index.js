var express = require('express');
var router = express.Router();
var FavoriteColor = require('../models/colors.js')
var TastefulPart = require('../models/tastefulparts.js')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {title: 'Index', author: 'Phil'})
})

/* GET mongo colors. */
router.get('/mongocolors', function(req, res, next) {
  FavoriteColor.find({}, function(err, data){
    var myData = data;
    console.log(JSON.stringify(myData, null, 4));
    res.render('mongocolors', { title: 'Mongo colors', subtitle:'Mongo colors', data: myData });
  })

})

/* GET exquisite corpse. */
router.get('/tastefulcadaver', function(req, res, next){
  TastefulPart.find({}, function(err, data){
    var tastefulData = data;
    console.log(JSON.stringify(tastefulData, null, 4));
    res.render('tastefulcadaver', { title: 'Tasteful cadaver', data: tastefulData });
  })
})


/*})
// router.get('/',function(req,res,next){
//   res.send("this works!")
// });

/*slash command stuff*/
router.post('/thisisadrill-slash', function(req,res,next){
  console.log("got a request: ");
  console.log(JSON.stringify(req.body, null, 4));
  res.send("phil's baby slack app. will do more soon.")
})

/* POST color form contents */
router.post('/sendcolor', function(req, res, next){
  // res.send('got your data');
  res.render('backtrack', {message:'got it!', backtext:'back to previous'});
  console.log('got some color data');
  console.log(JSON.stringify(req.body, null, 4));
  var newFavoriteColor = new FavoriteColor({
    colorUserName: req.body.name,
    favoriteColor: req.body.favoritecolor
  });
  console.log(JSON.stringify(newFavoriteColor, null, 4));

  newFavoriteColor.save(function(err){
    if (err){
      console.log(err)
    }
    else {
      console.log('saved '+ newFavoriteColor.coloruserName + "'s favorite color to the db");
    }
  })
})

/* POST tasteful form contents */
router.post('/sendtaste', function(req, res, next){
  // res.send('got your data');
  res.render('backtrack', {message:'got it!', backtext:'back to previous'});
  console.log('got some tasteful data');
  console.log(JSON.stringify(req.body, null, 4));
  var newTastefulPart = new TastefulPart({
    tastefulUserName: req.body.name,
    newPart: req.body.newpart,
    timeStamp: (new Date()).getHours()+"h"+(new Date()).getMinutes()+"m"+(new Date()).getSeconds()+"s",

  });
  console.log(JSON.stringify(newTastefulPart, null, 4));

  newTastefulPart.save(function(err){
    if (err){
      console.log(err)
    }
    else {
      console.log('saved '+ newTastefulPart.tastefulUserName + "'s new word to the db");
    }
  })
})

module.exports = router;
