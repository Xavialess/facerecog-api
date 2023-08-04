const express = require('express');
const bcrypt = require('bcrypt-nodejs');
const cors = require('cors');
const db = require('knex')({
    client: 'pg',
    connection: {
        host: 'dpg-cj6m10tjeehc73aqknkg-a',
        port: 5432,
        user: 'xavialess',
        password: 'ah2MUA0CTeqPmosQ2uUuW2aLh6MH1jxn',
        database: 'facerecog_04ju'
    }
});

const register = require('./controllers/register');
const signin = require('./controllers/signin');
const profile = require('./controllers/profile');
const image = require('./controllers/image');

const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('success');
})

app.post('/signin', (req, res) => { signin.handleSignin(req, res, db, bcrypt) });

app.post('/register', (req, res) => { register.handleRegister(req, res, db, bcrypt) });

app.get('/profile/:id', (req, res) => { profile.hanldeProfileGet(req, res, db) });

app.put('/image', (req, res) => { image.handleImage(req, res, db) });

// app.post('/imageurl', (req, res) => { image.handleApiCall(req, res)});

app.listen(3000, () => {
    console.log('app is running on port 3000');
})

