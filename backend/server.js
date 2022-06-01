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

app.use(bodyParser.json({limit: '50mb'}) );
app.use(bodyParser.urlencoded({
  limit: '50mb',
  extended: true,
  parameterLimit:50000
}));

app.use(cors());

//To accept the JSON Data
app.use(express.json());

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
const studentgroupRouter = require("./routes/SS_routes/studentgroups");
const staffRouter =require("./routes/SS_routes/staff");
const PDFUploadRouter = require('./routes/SS_routes/PDFUpload');
const studentRouter = require("./routes/AA_routes/student");
const topicRouter = require("./routes/IS_routes/topic");
const DocUploadRouter = require("./routes/IS_routes/DocUpload");
const adminRouter = require('./routes/RG_routes/admin');
const createmarkingRouter = require('./routes/RG_routes/createmarking');
const usersremoveRoutes = require('./routes/RG_routes/usersremove');
const presantationpdfuploadRoutes = require('./routes/RG_routes/presantationpdf');
// const Evaluate = require('./routes/RG_routes/evaluate');

// rotues use
app.use("/group",studentgroupRouter);
app.use("/student", studentRouter);
app.use("/staff",staffRouter);
app.use("/regtopic",topicRouter);
app.use("/document",DocUploadRouter);
app.use("/admin",adminRouter);
app.use("/createmarking",createmarkingRouter);
app.use("/usersremove",usersremoveRoutes);
app.use("/presantationpdf",presantationpdfuploadRoutes);
app.use("/assignment",PDFUploadRouter);
// app.use("/evaluate",Evaluate);




app.listen(PORT, () => {
    console.log(`Server is up and running on port number: ${PORT}`)
})


const http = require("http");
const { Server } = require("socket.io");


const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log(`User Connected: ${socket.id}`);

  socket.on("join_room", (data) => {
    socket.join(data);
    console.log(`User with ID: ${socket.id} joined room: ${data}`);
  });

  socket.on("send_message", (data) => {
    socket.to(data.room).emit("receive_message", data);
  });

  socket.on("disconnect", () => {
    console.log("User Disconnected", socket.id);
  });
});

server.listen(3001, () => {
  console.log(" RUNNING ON PORT 3001");
});
