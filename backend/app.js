const express = require('express');
const authRouter = require('./routes/authRoute');
const databaseConnect = require('./config/databaseConfig');
const app = express();

databaseConnect();

app.use(express.json());


app.use('/api/auth/',authRouter)


app.use('/', (req,res) => {
    res.status(200).json({data: "jwt auth server"});
})


module.exports = app;