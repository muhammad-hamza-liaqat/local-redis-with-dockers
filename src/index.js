const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { redis } = require("./utils/redisClient")
require("dotenv").config();
const app = express();

// middleware config
app.use(express.json());
app.use(bodyParser.raw({ type: 'application/json' }));
app.use(cors());

app.get("/call", async (req, res) => {
    res.end("hello from call route!")
});


app.listen(process.env.PORT, () => {
    console.warn(`server is running at http://localhost:${process.env.PORT}`)
})