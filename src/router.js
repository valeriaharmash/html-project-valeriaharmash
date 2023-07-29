const path = require('path');
const express = require('express');
const cors = require('cors')
const volleyball = require('volleyball')
require('dotenv').config()
const router = express.Router();

// logging middleware
router.use(volleyball)

// body parsing middleware
router.use(express.json())
router.use(express.urlencoded({extended: true}))

// CORS policy to accept front-end requests
router.use(cors())

router.use('/dist', express.static(path.join(process.cwd(), 'dist'), {maxAge: 30 * 86400000}));
router.use('/assets', express.static(path.join(process.cwd(), 'assets'), {maxAge: 30 * 86400000}));
router.use('/docs', express.static(path.join(process.cwd(), 'docs'), {maxAge: 30 * 86400000}));
router.use('/media', express.static(path.join(process.cwd(), 'media'), {maxAge: 30 * 86400000}));
router.use('/styles', express.static(path.join(process.cwd(), 'styles'), {maxAge: 30 * 86400000}));
router.use('/scripts', express.static(path.join(process.cwd(), 'scripts'), {maxAge: 30 * 86400000}));

// API routes
router.use('/api', require('./api'))

router.get('/', function (req, res) {
  res.sendFile(path.join(process.cwd(), 'assets', 'index.html'));
});

router.use(function (req, res, next) {
  next(new Error('Not Found'));
});

module.exports = router
