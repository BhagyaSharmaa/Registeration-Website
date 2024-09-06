const express = require('express');
const app = express();
const cors = require('cors');

// *** imports *** //
const connectMongoDB = require('./dbConnection');
const registerRouter = require('./Routes/register');

const PORT = 8080;
// *** middlewares *** //
app.use(cors());
app.use(express.json());

// *** connecting to mongoDB *** //
connectMongoDB("mongodb://localhost:27017/AYUSH")
    .then(() => console.log("Connected to database successfully"))
    .catch((err) => console.error("Error connecting to database:", err));

// *** routing endoints *** //
app.use('/register',registerRouter);

app.get('/',async (req,res) => {
    res.send("hello");
    console.log("hello");
})

app.listen(PORT , (err) => {
    if(err) console.log("error connecting to server");
    else console.log(`connected at port : ${PORT}`);
})