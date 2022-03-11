const express = require('express');
const { append } = require('express/lib/response');
const util = require('util');
const ExpressError = require('../ExpressError.js');

const router = express.Router();

router.get('/', (req, res) => {
  res.render('index');
});
//roadmaps start
router.get('/roadmaps', (req, res) => {
  res.render('roadmaps');
});
router.get('/roadmaps/a-plague-tale-innocence', (req, res) => {
  res.render('./roadmaps/a-plague-tale-innocence');
});
router.get('/roadmaps/broforce', (req, res) => {
  res.render('./roadmaps/broforce');
});
router.get('/roadmaps/children-of-morta', (req, res) => {
  res.render('./roadmaps/children-of-morta');
});
router.get('/roadmaps/control', (req, res) => {
  res.render('./roadmaps/control');
});

const darksidersThree = require('../public/ach_local/darksiders-3.json');
router.get('/roadmaps/darksiders-3', (req, res) => {
  res.render('./roadmaps/darksiders-3', { ...darksidersThree });
});

const darkwoodAch = require('../public/ach_local/darkwood.json');
router.get('/roadmaps/darkwood', (req, res) => {
  res.render('./roadmaps/darkwood', { ...darkwoodAch });
});

const elderbornAch = require('../public/ach_local/elderborn.json');
router.get('/roadmaps/elderborn', (req, res) => {
  res.render('./roadmaps/elderborn', { ...elderbornAch });
});

const finalExamAch = require('../public/ach_local/final-exam.json');
router.get('/roadmaps/final-exam', (req, res) => {
  res.render('./roadmaps/final-exam', { ...finalExamAch });
});

const vampyrAch = require('../public/ach_local/vampyr.json');
router.get('/roadmaps/vampyr', (req, res) => {
  res.render('./roadmaps/vampyr', { ...vampyrAch });
});

const chimeraAch = require('../public/ach_local/xcom-chimera-squad.json');
router.get('/roadmaps/xcom-chimera-squad', (req, res) => {
  res.render('./roadmaps/xcom-chimera-squad', { ...chimeraAch });
});

const darksidersGen = require('../public/ach_local/darksiders-genesis.json');
router.get('/roadmaps/darksiders-genesis', (req, res) => {
  res.render('./roadmaps/darksiders-genesis', { ...darksidersGen });
});

const nowhereAch = require('../public/ach_local/nowhere-prophet.json');
router.get('/roadmaps/nowhere-prophet', (req, res) => {
  res.render('./roadmaps/nowhere-prophet', { ...nowhereAch });
});

const resThreeAch = require('../public/ach_local/resident-evil-3.json');
router.get('/roadmaps/resident-evil-3', (req, res) => {
  res.render('./roadmaps/resident-evil-3', { ...resThreeAch });
});

router.get('/roadmaps/bullets-per-minute', (req, res) => {
  res.render('./roadmaps/bullets-per-minute');
});

const metroExAch = require('../public/ach_local/metro-exodus.json');
router.get('/roadmaps/metro-exodus', (req, res) => {
  res.render('./roadmaps/metro-exodus', { ...metroExAch });
});

const sekiroAch = require('../public/ach_local/sekiro-shadows-die-twice.json');
router.get('/roadmaps/sekiro-shadows-die-twice', (req, res) => {
  res.render('./roadmaps/sekiro-shadows-die-twice', { ...sekiroAch });
});

// for (let i = 0; i < darksidersThree.achievements.length; i++) {
//   console.log(i, darksidersThree.achievements[i]);
// }

//roadmaps end

//about start
router.get('/about', (req, res) => {
  res.render('./about/about');
});
router.get('/about/contact', (req, res) => {
  res.render('./about/contact');
});
router.get('/site-news', (req, res) => {
  res.render('site-news');
});
//about end

//footer start
router.get('/privacy-policy', (req, res) => {
  res.render('privacy-policy');
});
router.get('/disclaimer', (req, res) => {
  res.render('disclaimer');
});
//footer end

//error
router.all('*', (req, res, next) => {
  next(new ExpressError('PAGE NOT FOUND', 404));
});

router.use((err, req, res, next) => {
  const { statusCode = 500 } = err;
  if (!err.message) err.message = 'Somethign went wrong!';
  res.status(statusCode).render('error', { err });
});

module.exports = router;
