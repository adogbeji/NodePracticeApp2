// const http = require('http');

const express = require('express');
const bodyParser = require('body-parser');

// For Next Time: Start looking at how Middleware works (Lesson 61 - 0:33)

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
    console.log('Middleware 1');
    next();
});

app.use((req, res, next) => {
    console.log('Middleware 2');
});

app.listen(3000);