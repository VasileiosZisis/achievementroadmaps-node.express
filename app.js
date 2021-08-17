const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, '/public')));
app.use(express.static(path.join(__dirname, '/assets')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

app.get('/', (req, res) => {
    res.render('home')
})

app.get('/site-news', (req, res) => {
    res.render('site-news')
})

app.listen(3000, () => {
    console.log('Serving port 3000')
})