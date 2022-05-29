const mongoose = require("mongoose");
const validator = require("validator");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const staffSchema = new mongoose.Schema({
    name :{
        type: String,
        required: true,
        trim: true, 
    },
    
    phone: {
        type: String,
        required: true,
        maxlength: 13,
        trim: true,
        validate(value) {
          if (!validator.isMobilePhone(value)) {
            throw new Error("Please enter valid mobile number");
          }
        },
      },

    faculty: {
        type: String,
        required: true,
        trim: true,
    },
    feild: {
      type: String,
      required: true,
      trim: true,
  },
    
    staff_id: {
        type: String,
        required: true,
        trim: true,
      },
      
    role:{
        type: String,
        required: true,
        trim: true,
    },

    email: {
        type: String,
        required: true,
        lowercase: true,
        trim: true,
        validate(value) {
          if (!validator.isEmail(value)) {
            throw new Error("Please enter valid email address");
          }
        },
    },
    pwd: {
        type: String,
        required: true,
        trim: true,
    },

    tokens: [
        {
        token: {
            type: String,
            required: true,
        },
        },
    ],
});

// @Action - encrypt the password
staffSchema.pre('save', async function(next){
    if(!this.isModified("pwd")){
        next();
    }
    const salt = await bcrypt.genSalt(8);
    this.pwd = await bcrypt.hash(this.pwd, salt);
  });

// @Action - Get auth token
staffSchema.methods.generateAuthToken = async function () {
    const staff = this;
    const token = jwt.sign({ _id: staff._id }, "jwtSecret");
    staff.tokens = staff.tokens.concat({ token });
    await staff.save();
    return token;
};

// @Action - Find staff by credentials
staffSchema.statics.findByCredentials = async (staff_id, pwd) => {
    const staff1 = await staff.findOne({ staff_id });
    if (!staff1) {
      throw new Error("Please enter authorized Staff ID");
    }
    const isMatch = await bcrypt.compare(pwd, staff1.pwd);
    if (!isMatch) {
      throw new Error("Password is not matched");
    }
    return staff1;
    };

 const staff = mongoose.model("staff", staffSchema);
 module.exports = staff;
