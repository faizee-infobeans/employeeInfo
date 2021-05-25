var express = require("express");
var router = express.Router();
var User = require("./users");
let Register = require("./register");
var Login = require("./login");
var multer = require("multer");
var path = require("path");
var jwt = require("jsonwebtoken");
var nodemailer = require("nodemailer");
const { equal } = require("assert");
var registerdata = Register.find({})
//var mailer = require('./mailerconfig')

router.use(express.static(__dirname));
//console.log(_dirname)

// var Storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, '/../Users/alamm/OneDrive/Desktop/newlogin/client/public')
//   },
//   filename: (req, file, cb)=> {
//     cb(null, + Date.now() + path.extname(file.originalname));
//   }
// })

// var upload = multer({ storage: Storage }).single('image')

var Storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/images");
  },
  filename: function (req, file, cb) {
    cb(null, +Date.now() + file.originalname);
  },
});

var upload = multer({ storage: Storage }).single("attachment");

router.post("/newregister", upload, function (req, res, next) {
  var userDetails = Register.create({
    fname: req.body.fname,
    lname: req.body.lname,
    email: req.body.email,
    mobile: req.body.mobile,
    attachment: req.file.filename,
    password: req.body.password,
  });
  console.log(userDetails);
  try {
    async function main() {
      let testAccount = await nodemailer.createTestAccount();

      let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        service: "gmail",
        port: 535,
        secure: false,
        auth: {
          user: "emailid",
          pass: "password",
        },
        // tls: {
        // rejectUnauthorized: false
        // }
      });

      let user = await transporter.sendMail(
        {
          from: '"Faizee Bano" faizeebano98@gmail.com', // sender address
          to: req.body.email, // list of receivers
          subject: "Welcome to infobeans", // Subject line
          text: "Thanks", // plain text body
          html: `<h1>Thank You for join us</h1>
          <h2>You are register sucessfully ! </h2>
          `  // html body
        },
        (error, user) => {
          if (error) {
            console.log(error);
          } else {
            console.log("data sent");
            console.log("Message sent: %s", user.messageId);
            console.log("Preview URL: %s", nodemailer.getTestMessageUrl(user));
          }
        }
      );

      let admin = await transporter.sendMail(
        {
          from: '"Faizee Bano" faizeebano98@gmail.com', // sender address
          to: "faizee.bano@infobeans.com", // list of receivers admin
          subject: "New user register", // Subject line
          text: "Hello world?", // plain text body
          html: `
        <h1>A New User Registered</h1>
        <h2>Information</h2>
        <ul>
        <li>fName : ${req.body.fname}</li>
        <li>lName : ${req.body.lname}</li>
        <li>Email : ${req.body.email}</li>
        <li>Mobile : ${req.body.mobile}</li>
        <li>Password : ${req.body.password}</li>
        </ul>
        `, // html body
        },
        (error, admin) => {
          if (error) {
            console.log(error);
          } else {
            console.log("data sent");
            console.log("Message sent: %s", admin.messageId);
            console.log("Preview URL: %s", nodemailer.getTestMessageUrl(admin));
          }
        }
      );
    }
    main().catch(console.error);

    res.send("sucess");
  } catch (err) {
    res.send(err);
  }
});

router.get("/getregisterdata", (req, res) => {
  Register.find({}, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      console.log(data);
      //jwt.verify(req.token, "abcdefghijklmnopqrstuvwxyz", (err, Data)=>{
      //if(err){
      //res.status(401);
      //}else{
      res.status(200).send(data);
      //}
      //})
    }
  });
});


/* GET home page. */
router.get("/", function (req, res, next) {
  registerdata.exec((err,data)=>{
    if(err) throw err;
    res.render("registerdata", { title: "All Registered Data" , data:data});
  })

});

// const verify = (req, res, next) => {
//   const bearerHeader = req.headers["authorization"];
//   if (typeof bearerHeader !== "undefined") {
//     req.token = bearerHeader.split(" ")[1];
//     next();
//   } else {
//     res.sendStatus(401);
//   }
// };

router.post("/login", (req, res) => {
  Login.find(
    { email: req.body.email, password: req.body.password },
    (err, data) => {
      if (err) {
        res.status(500).send(err);
      } else {
        if (data.length) {
          const user = data[0];
          jwt.sign({ user }, "abcdefghijklmnopqrstuvwxyz", (err, token) => {
            res.send({ token: token });
          });
        } else {
          res.send({ message: "Invalid user" });
        }
      }
    }
  );
});

router.get("/getdata", (req, res) => {
  User.find({}, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      console.log(data);
      //jwt.verify(req.token, "abcdefghijklmnopqrstuvwxyz", (err, Data)=>{
      //if(err){
      //res.status(401);
      //}else{
      res.status(200).send(data);
      //}
      //})
    }
  });
});

router.post("/register", function (req, res, next) {
  var newUser = new User({
    profilePic: req.file.filename,
    name: req.body.name,
    dateOfJoining: req.body.dateOfJoining,
    yearOfCompletion: req.body.yearOfCompletion,
    like: req.body.like,
  });
  newUser
    .save()
    .then(() => {
      res.send("sucess");
    })
    .catch((e) => {
      res.send(err);
    });
});

router.post("/newregisterapi", async (req, res, next) => {
  var { fname, lname, email, mobile, profileImage, password } = req.body;

  if (!fname || !lname || !email || !mobile || !profileImage || !password) {
    return res.status(401).json({ error: "plz filled all the properties" });
  }
  try {
    const userExist = await Register.countDocuments({ email });

    if (userExist) {
      return res.status(401).json({ error: "email already exists" });
    } else if (password == cpassword) {
      return res.status(401).json({ error: "password are not match" });
    } else {
      const user = new Register({
        fname,
        lname,
        email,
        mobile,
        profileImage,
        password,
      });
      await user.save();
      return res.status(200).json({ message: "register sucrssfully" });
    }
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
