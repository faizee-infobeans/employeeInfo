var mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/infobeans",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
}).then(()=>{
    console.log("Database connected sucessfully")
})

// "name":"Faizee Bano",
// "yearOfCompletion":"1",
// "Date":"3th Feb",
//"like":65,
//"comment":66


const Schema=mongoose.Schema;
const userSchema= new Schema({
  profilePic: {
    type: String
  },
    name:{
      type: String
    },
    dateOfJoining:{
      type:String
    },
    yearOfCompletion:{
      type:Number
    },
    like:{
      type:Number
    }
});

module.exports = mongoose.model('user', userSchema);