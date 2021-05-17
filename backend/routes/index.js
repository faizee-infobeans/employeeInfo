var express = require('express');
var router = express.Router();
var User = require('./users')
var multer = require('multer')
var path = require('path')

//router.use(express.static(__dirname))
//console.log(_dirname)

var Storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '/../Users/alamm/OneDrive/Desktop/newlogin/client/public')
  },
  filename: (req, file, cb)=> {
    cb(null, + Date.now() + path.extname(file.originalname));
  }
})

var upload = multer({ storage: Storage }).single('image')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
  
});

router.post('/register', upload, function (req, res, next) {
  var newUser = new User({
    profilePic: req.file.filename,
    name: req.body.name,
    dateOfJoining: req.body.dateOfJoining,
    yearOfCompletion: req.body. yearOfCompletion,
    like: req.body.like
  })
  newUser.save()
  .then( ()=>{
    res.send("sucess")
  }).catch( (e)=>{
    res.send(err)
  }) 
});


router.get("/getdata", (req, res) => {
  User.find({}, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      console.log(data);
      res.status(200).send(data);
    }
  });
});


module.exports = router;
