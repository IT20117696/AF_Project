const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
require("dotenv").config();


//app middleware
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());


const PORT = process.env.PORT || 8070;

//import routers




app.use(bodyParser.json({limit: '50mb'}) );
app.use(bodyParser.urlencoded({
  limit: '50mb',
  extended: true,
  parameterLimit:50000
}));

app.use(cors());
app.use(express.json());

//routes use




const URL = process.env.MONGODB_URL;
process.env.SUPPRESS_NO_CONFIG_WARNING = 'y';

mongoose.connect(URL, {
    //useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    //useFindAndModify: false
});

const connection = mongoose.connection;
connection.once("open", () => {
console.log("Mongodb connection success!!!");

})

// @import routes
//sajani
const studentgroupRouter = require("./routes/SS_routes/studentgroups");
const staffRouter =require("./routes/SS_routes/staff");
const PDFUploadRouter = require('./routes/SS_routes/PDFUpload');

//aro
const studentRouter = require("./routes/AA_routes/student");


//ima
const topicRouter = require("./routes/IS_routes/topic");
const DocUploadRouter = require("./routes/IS_routes/DocUpload");

//randy
const adminRouter = require('./routes/RG_routes/admin');
const createmarkingRouter = require('./routes/RG_routes/createmarking');





// rotues use

app.use("/group",studentgroupRouter);
app.use("/student", studentRouter);
app.use("/staff",staffRouter);
app.use("/regtopic",topicRouter);
app.use("/document",DocUploadRouter);
app.use("/admin",adminRouter);














app.listen(PORT, () => {
    console.log(`Server is up and running on port number: ${PORT}`)
})
