const express = require('express');

const jwt = require('jsonwebtoken');
const passport = require('passport')
const cors = require('cors');
const path =require('path');
const mongoose = require('mongoose');



 const config = require('./config/db');
const account = require('./routes/account');

const app = express();
const port = 3000;
app.use(passport.initialize())
app.use(passport.session());

require('./config/passport')(passport);

app.use(express.static(path.join(__dirname, 'public' )));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
 mongoose.connect(config.db, { useNewUrlParser: true ,useUnifiedTopology: true} );
 
mongoose.connection.on('connected', () =>{
    console.log('succes');
})
mongoose.connection.on('error', (eror) =>{
    console.log('unsucces' + error);
})
app.get('/', (req,res) => res.redirect('/home'));

app.get('/home', (req,res) => res.send("<h1>home</h1>"));


app.use('/account', account)
app.listen( port, () => console.log('app run'));