const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const errorController = require('./controllers/error');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({extended: false}));//Inpuot body parsed
app.use(express.static(path.join(__dirname, 'public')));//public folder opened client side

// adding other routes files here!!!
app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);//any routing method this method call and response 404 status

app.listen(3002); //event driven architecture

