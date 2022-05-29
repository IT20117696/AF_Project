const mongoose = require('mongoose');
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const validator = require("validator");

const adminSchema = new mongoose.Schema({

    name: {
        type : String,
        required : true,
        trim:true
    },
    phone: {
        type: String,
        require : true,
        trim:true,
        validate(value) {
            if (!validator.isMobilePhone(value)) {
              throw new Error("Please enter valid mobile number");
            }
          },
    },
    
    sliitid:{
        type : String,
        required : true,
        trim : true
    },

    email:{
        type : String,
        required : true,
        lowercase: true,
        trim : true,
        validate(value) {
            if (!validator.isEmail(value)) {
              throw new Error("Please enter valid email address");
            }
          },
    },

    password: {
        type : String,
        required : true,
        trim : true
    },

    tokens: [{
        token: {
        type: String,
        required: true,
        }
    }]
});

//password encryption
adminSchema.pre('save', async function(next){
    if(!this.isModified("password")){
        next();
    }
    const salt = await bcrypt.genSalt(8);
    this.password = await bcrypt.hash(this.password, salt);
});
 
adminSchema.methods.generateAuthToken = async function () {
    const admin = this;
    const token = jwt.sign({ _id: admin._id }, "jwtSecret");
    admin.tokens = admin.tokens.concat({ token });
    await admin.save();
    return token;
  };
 
  // @Action - Find admin by credentials
  adminSchema.statics.findByCredentials = async (sliitid, password) => {
    const admin1 = await admin.findOne({ sliitid});
    if (!admin1) {
      throw new Error("Please enter a correct SLIIT ID");
    }
    const isMatch = await bcrypt.compare(password, admin1.password);
    if (!isMatch) {
      throw new Error("Password is not matched");
    }
    return admin1;
  };

const admin = mongoose.model("admin",adminSchema);
module.exports = admin;