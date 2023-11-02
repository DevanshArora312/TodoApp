const express = require("express");
require("dotenv").config();
const dbConnect = require("./config/database");
const app = express();
const createTodoRoutes = require("./routes/createTodoRoutes");
const getTodoRoutes = require("./routes/getTodoRoutes");
const createCommentRoutes = require("./routes/commentRoutes");
const cors = require("cors");

const corsOptions = {
    origin: 'http://localhost:5173',
    methods: 'GET,POST,PUT,DELETE',
    allowedHeaders: 'Content-Type,Authorization'
  };

app.use(express.json());
app.use(cors(corsOptions));
app.use("/api/v1",createTodoRoutes);
console.log("chalja bsdk");
app.use("/api/v1",getTodoRoutes);
app.use("/api/v1",createCommentRoutes);

app.get("/",(req,res) => {
    res.send("<h1> Hemllo guymz </h1>");
})


app.listen(process.env.PORT, () => {
    console.log("Server started at port",process.env.PORT);
})

dbConnect();