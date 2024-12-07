const express = require('express');
const app = express();
const authRouter = require('./routes/authRoute');
const databaseConnect = require('./config/databaseConfig');
const cookieParser = require('cookie-parser');

databaseConnect();

app.use(express.json());
app.use(cookieParser());


app.use('/api/auth/',authRouter)


app.use('/', (req,res) => {
    res.status(200).json({data: "jwt auth server"});
})


module.exports = app;