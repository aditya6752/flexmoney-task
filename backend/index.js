const express = require('express')
const morgan = require("morgan")
const app = express()
const port = 3000
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const userRoutes = require("./routes/userRoutes")
const slotRoutes = require("./routes/slotRoutes")
const cors = require('cors');
app.use(cors({
    origin: 'http://localhost:3001'
}));
const path = require("path");
dotenv.config();
// console.log(process.env.MONGO_URL)
mongoose.set('strictQuery', true);
mongoose.connect(
    process.env.MONGO_URL
    , {
        useNewUrlParser: true,
        useUnifiedTopology: true
});
// app.use(express.)
app.use(morgan("combined"))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname,"../frontend/build/")))
app.use("/user",userRoutes)
app.use("/slot",slotRoutes)
// console.log(slotRoutes)
// app.get("*",(req,res)=>{
//     console.log(path.join(__dirname,"../frontend/build/index.html"))
    // res.sendFile(path.join(__dirname,"../frontend/build/index.html"))})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))