require('dotenv').config();
const path = require('path')
const cors = require('cors')
const express = require('express')
const mongoose = require('mongoose')
const connectDB = require('./config/dbConn')
const app = express();
const PORT = process.env.PORT || 3500;

connectDB();
app.use(cors());
app.use(express.urlencoded({extended:false}));
app.use(express.json())
// app.use(cookieParser())


app.use('/users',require('./routes/register'))
app.use('/students',require('./routes/marks'))

//listens only when it is connected to database
mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
