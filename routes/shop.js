const path = require('path');

const express = require('express');

const rootDir = require('../util/path');
const adminData = require('./admin');

const router = express.Router();

router.get('/', (req, res, next)=> {
    const products = adminData.products;
    res.render('shop', {prods: products, pageTitle: 'Shop', path: '/'});
    //res.sendFile(path.join(rootDir, 'views', 'shop.html'));//For html file
});

module.exports = router; 