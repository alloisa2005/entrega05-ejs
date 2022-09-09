const express = require('express');
const productsRouter = require('./routes/products');

const app = express();

app.listen(8080, () => console.log('Server Up!!'));

app.set('views', './views');
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {  
  res.render('home');
})

/* app.get('/listaProductos', (req, res) => {  
  res.render('productList');
}) */

app.use('/api/productos', productsRouter);

app.get('/*', (req, res) => {
  res.status(404).send({status: 'ERROR', result: 'Path not defined'});
});