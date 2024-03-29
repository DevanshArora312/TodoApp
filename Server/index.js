const express = require("express");
require("dotenv").config();
const dbConnect = require("./config/database");
const app = express();
const createTodoRoutes = require("./routes/createTodoRoutes");
const getTodoRoutes = require("./routes/getTodoRoutes");
const createCommentRoutes = require("./routes/commentRoutes");
const userRoutes = require("./routes/userRoutes");
const cors = require("cors");
// const serverless = require("serverless-http");

// const corsOptions = {
//     origin: 'http://localhost:5173',
//     methods: 'GET,POST,PUT,DELETE',
//     allowedHeaders: 'Content-Type,Authorization'
//   };

app.use(express.json());
app.use(cors());
app.use("/api/v1",createTodoRoutes);
app.use("/api/v1",getTodoRoutes);
app.use("/api/v1",createCommentRoutes);
app.use("/api/v1",userRoutes);
app.get("/",(req,res) => {
    res.send("<h1> Hemllo guymz </h1>");
})


app.listen(process.env.PORT, () => {
    console.log("Server started at port",process.env.PORT);
})

dbConnect();
