var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: '首页' });
});
router.get('/layout', function(req, res) {
  res.render('layout');
});
router.get('/list', function(req, res) {
  res.render('list', { 
      title: 'List',
      items: [1991, 'byvoid', 'express', 'Node.js']
    });
});
router.get('/u/:user', function(req, res) {
});
router.post('/post', function(req, res) {
});
router.get('/reg', function(req, res) {
  res.render('reg', { title: '用户注册' });
});
router.post('/reg', function(req, res) {
});
router.get('/login', function(req, res) {
});
router.post('/login', function(req, res) {
});
router.get('/logout', function(req, res) {
});
module.exports = router;
