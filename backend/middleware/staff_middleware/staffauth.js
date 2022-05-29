const jwt = require("jsonwebtoken");
const config = require("config");
const staff = require("../../models/SS_models/staff");

const staffauth = async (req,res,next)=>{
    try {
        const token = req.header("Authorization");
        const decode = jwt.verify(token, "jwtSecret");
        const Staff = await staff.findOne({ _id: decode._id, "tokens.token": token });
        if (!Staff) {
          throw new Error("Please Authenticate");
        }
        req.token = token;
        req.Staff = Staff;
        next();
      }

catch (error) {
    res.status(401).send({ message: error.message });
    console.log("Error in auth.js middleware ", error.message);
  }
};

module.exports = staffauth;