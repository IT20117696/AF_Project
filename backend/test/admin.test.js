const mongoose = require("mongoose");
const Admin = require("../models/RG_models/admin");
const adminData = { name:"namename" , phone:"0715681831"  ,sliitid: "it20088683",email:"it200984850@gmail.com" ,password:"it20088682" };

describe("Admin Model Test", () => {
  beforeAll(async () => {
    process.env.MONGODB_UR,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
      (err) => {
        if (err) {
          console.error(err);
          process.exit(1);
        }
      };
  });

  it("register to the system admin without required field", async () => {
    const RequiredField = new Admin({
      email: "it200984850@gmail.com",
    });
    let err;
    try {
      const savedRequiredField =
        await RequiredField.save();
      error = savedRequiredField;
    } catch (error) {
      err = error;
    }
    expect(err).toBeInstanceOf(mongoose.Error.ValidationError);
    expect(err.errors.sliitid).toBeDefined();
  });
});
