const express = require('express');
const app = express();
const express = require('express');
const APIRouter = require('./Routes/API');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const authRouter = require('./routes/auth');
const AuthMiddleware = require('./Middlewhare/Authm');
mongoose.set('strictQuery', true);

app.use(bodyParser.urlencoded({ extended: true}));


app.use(bodyParser.json());
app.listen(3000, () => console.log('Server started'));

const mongoose = require('mongoose');


// connect to mongodb
mongoose.connect('mongodb+srv://mohamedalilechefabrikademy:azerty@clusterfbrk.tykmlyj.mongodb.net/?retryWrites=true&w=majority');


mongoose.connection.once('open', function(){
    console.log('Connectée');
}).on('error', function(error){
    console.log('Erreur de Connection :', error);
});

app.use(express.json());

 
app.use('/API', APIRouter);


app.use('/Auth', authRouter);


app.use('/API', AuthMiddleware, APIRouter);

