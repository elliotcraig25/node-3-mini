//constants, importing files and packages
const express = require('express');
require('dotenv').config();
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.SERVER_PORT;
const mc = require('./messagesCtrl');
const session = require('express-sessions');

//middleware
app.use(bodyParser.json());
const {SESSION_SECRET}=process.env
app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}))

//endpoints
app.get(`/api/messages`, mc.getAllMessages)

app.post(`/api/messages`, mc.createMessage)

app.get(`/api/messages/history`, mc.history)

//where the magic happens
app.listen(PORT, ()=>console.log(`listening on ${PORT}`));