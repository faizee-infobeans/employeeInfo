const mongoose = require('mongoose')
//const bcrypt = require('bcrypt')

const userSchema = mongoose.Schema({
  fname: {
    type: String,
    required: [true, 'First Name is required'],
    minlength: [2, 'Name can\'t be smaller than 2 characters'],
    maxlength: [64, 'Name can\'t be greater than 64 characters']
  },
  lname: {
    type: String,
    required: [true, 'Last Name is required'],
    minlength: [2, 'Name can\'t be smaller than 2 characters'],
    maxlength: [64, 'Name can\'t be greater than 64 characters']
  },
  email: {
    type: String,
    lowercase: true,
    required: [true, 'Email is required'],
    maxlength: [128, 'Email can\'t be greater than 128 characters'],
    index: true
  },
  mobile: {
    type: Number,
    //maxlength: [10, 'Mobile No can\'t be greater than 10 characters']
  },
  password: {
    type: String,
    required: [true, 'Password is required']
  },
  attachment: {
    type: String,
  },
})

/**
 * Validates unique email
 */
// userSchema.path('email').validate(async (email) => {
//   const emailCount = await mongoose.models.Register.countDocuments({ email })
//   return !emailCount
// }, 'Email already exists')

/**
 * Encrypts password if value is changed
 */

// userSchema.pre('save', async function (next) {
//   if (!this.isModified('password')) next()
//   this.password = await bcrypt.hash(this.password, 5)
//   return next()
// })

// userSchema.methods.checkPassword = async function (password) {
//   const result = await bcrypt.compare(password, this.password)
//   return result
// }

module.exports = mongoose.model('Register', userSchema)


