// const http = require('http');

const express = require('express');
const bodyParser = require('body-parser');

// For Next Time: Continue Handling Different Routes (Lesson 63 - 2:32)

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/add-product', (req, res, next) => {
    res.send('<h1>Add Product Page!</h1>');
});

app.use('/', (req, res, next) => {
    console.log('Middleware 2');
    res.send('<h1>Hello from Express!</h1>');
});

app.listen(3000);