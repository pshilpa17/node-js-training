const express = require('express');
const path = require('path');
const app = express();
const bcrypt = require('bcrypt');
const session = require('express-session')
const PORT = process.env.PORT || 5000;

//set viewengine
app.set('views',path.join(__dirname, 'views'))
app.set('view engine','pug');

app.use(express.json());
//when data send from client to server, it decodes the special characters
app.use(express.urlencoded());
app.use(session({
    name: 'sid',
    saveUninitialized: 'false',
    resave:false,
    secret:'some_long_randon_string',
    cookie: {
        maxAge:1000*60*60*2,
        sameSite:true,
        secure: process.env.NODE_ENV==='production'
    }
}))

app.use(express.static(path.join(__dirname, 'public')))
app.use('/api/members',require('./routs/api/member'))
app.use('/articles',require('./routs/articles'))
//signup rout
app.use('/user',require('./routs/user'));

app.listen(PORT, () => console.log(`server started on port ${PORT}`))