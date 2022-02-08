const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.render('index')
})
//roadmaps start
router.get('/roadmaps', (req, res) => {
    res.render('roadmaps')
})
router.get('/roadmaps/a-plague-tale-innocence', (req, res) => {
    res.render('./roadmaps/a-plague-tale-innocence')
})
router.get('/roadmaps/broforce', (req, res) => {
    res.render('./roadmaps/broforce')
})
router.get('/roadmaps/children-of-morta', (req, res) => {
    res.render('./roadmaps/children-of-morta')
})
router.get('/roadmaps/control', (req, res) => {
    res.render('./roadmaps/control')
})
router.get('/roadmaps/darksiders-3', (req, res) => {
    res.render('./roadmaps/darksiders-3')
})
router.get('/roadmaps/darkwood', (req, res) => {
    res.render('./roadmaps/darkwood')
})
router.get('/roadmaps/elderborn', (req, res) => {
    res.render('./roadmaps/elderborn')
})
router.get('/roadmaps/final-exam', (req, res) => {
    res.render('./roadmaps/final-exam')
})
router.get('/roadmaps/vampyr', (req, res) => {
    res.render('./roadmaps/vampyr')
})
router.get('/roadmaps/xcom-chimera-squad', (req, res) => {
    res.render('./roadmaps/xcom-chimera-squad')
})
router.get('/roadmaps/darksiders-genesis', (req, res) => {
    res.render('./roadmaps/darksiders-genesis')
})
router.get('/roadmaps/nowhere-prophet', (req, res) => {
    res.render('./roadmaps/nowhere-prophet')
})
router.get('/roadmaps/resident-evil-3', (req, res) => {
    res.render('./roadmaps/resident-evil-3')
})
router.get('/roadmaps/bullets-per-minute', (req, res) => {
    res.render('./roadmaps/bullets-per-minute')
})
router.get('/roadmaps/metro-exodus', (req, res) => {
    res.render('./roadmaps/metro-exodus')
})
router.get('/roadmaps/sekiro-shadows-die-twice', (req, res) => {
    res.render('./roadmaps/sekiro-shadows-die-twice')
})
//roadmaps end

//about start
router.get('/about', (req, res) => {
    res.render('./about/about')
})
router.get('/about/contact', (req, res) => {
    res.render('./about/contact')
})
router.get('/site-news', (req, res) => {
    res.render('site-news')
})
//about end

//footer start
router.get('/privacy-policy', (req, res) => {
    res.render('privacy-policy')
})
router.get('/disclaimer', (req, res) => {
    res.render('disclaimer')
})
//footer end

module.exports = router;