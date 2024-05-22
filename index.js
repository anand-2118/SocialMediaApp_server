// server.mjs
const express = require('express');
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const bodyParser = require('body-parser')
const userRoutes = require('./routes/users')
const cors = require('cors')
dotenv.config();

const app = express()

app.use(cors())
app.use(bodyParser.urlencoded())
app.use(bodyParser.json())
app.use(userRoutes)


app.get('/', (req, res) => {
    res.end('SocialMediaApp');
});



app.listen(process.env.PORT, () => {
    mongoose
   .connect(process.env.MONGODB_URL)
   .then(()=>console.log('server is running'))
   .catch((error)=> console.log(error));
});

