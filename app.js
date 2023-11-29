// const http = require('http');

const express = require('express');
const bodyParser = require('body-parser');

// For Next Time: Lesson 64 (Parsing Incoming Requests - 2:07)

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/add-product', (req, res, next) => {
    res.send('<form action="/product" method="POST"><input type="text" name="product"><button type="submit">Add Product</button></form>');
});

app.use('/product', (req, res, next) => {})

app.use('/', (req, res, next) => {
    console.log('Middleware 2');
    res.send('<h1>Hello from Express!</h1>');
});

app.listen(3000);