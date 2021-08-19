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
//roadmaps start
app.get('/roadmaps', (req, res) => {
    res.render('roadmaps')
})
app.get('/roadmaps/a-plague-tale-innocence', (req, res) => {
    res.render('./roadmaps/a-plague-tale-innocence')
})
app.get('/roadmaps/broforce', (req, res) => {
    res.render('./roadmaps/broforce')
})
app.get('/roadmaps/children-of-morta', (req, res) => {
    res.render('./roadmaps/children-of-morta')
})
app.get('/roadmaps/control', (req, res) => {
    res.render('./roadmaps/control')
})
app.get('/roadmaps/darksiders-3', (req, res) => {
    res.render('./roadmaps/darksiders-3')
})
app.get('/roadmaps/darkwood', (req, res) => {
    res.render('./roadmaps/darkwood')
})
app.get('/roadmaps/final-exam', (req, res) => {
    res.render('./roadmaps/final-exam')
})
app.get('/roadmaps/vampyr', (req, res) => {
    res.render('./roadmaps/vampyr')
})
app.get('/roadmaps/xcom-chimera-squad', (req, res) => {
    res.render('./roadmaps/xcom-chimera-squad')
})
//roadmaps end
//about start
app.get('/about', (req, res) => {
    res.render('./about/about')
})
app.get('/about/contact', (req, res) => {
    res.render('./about/contact')
})
//about end
app.get('/site-news', (req, res) => {
    res.render('site-news')
})
app.get('/privacy-policy', (req, res) => {
    res.render('privacy-policy')
})
app.get('/disclaimer', (req, res) => {
    res.render('disclaimer')
})

app.listen(3000, () => {
    console.log('Serving port 3000')
})