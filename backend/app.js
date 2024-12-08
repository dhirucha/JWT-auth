const express = require('express');
const app = express();
const authRouter = require('./routes/authRoute');
const databaseConnect = require('./config/databaseConfig');
const cookieParser = require('cookie-parser');
const cors = require('cors');

databaseConnect();

app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: [process.env.CLIENT_URL],
    credentials: true
}));


app.use('/api/auth/',authRouter)


app.use('/', (req,res) => {
    res.status(200).json({data: "jwt auth server"});
})


module.exports = app;