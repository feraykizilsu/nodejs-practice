const Product = require('../models/product');

exports.getProducts = (req, res, next) => {
    Product.fetchAll((products) => {
        res.render('shop/product-list',
            {
                prods: products,
                pageTitle: 'All Products',
                path: '/product'
            });
        //res.sendFile(path.join(rootDir, 'views', 'shop.html'));//For html file
    });
};

exports.getIndex = (req, res, next) => {
    Product.fetchAll((products) => {
        res.render('shop/index',
            {
                prods: products,
                pageTitle: 'Shop',
                path: '/'
            });
        //res.sendFile(path.join(rootDir, 'views', 'shop.html'));//For html file
    });
};
exports.getCart = (req, res, next) => {
    res.render('shop/cart',
        {
            pageTitle: 'Your Cart',
            path: '/cart'
        });
};

exports.getOrders = (req, res, next) => {
    res.render('shop/orders',
        {
            pageTitle: 'Orders',
            path: '/orders'
        });
};


exports.getCheckout = (req, res, next) => {
    res.render('shop/checkout',
        {
            pageTitle: 'Checkout',
            path: '/checkout'
        });
};