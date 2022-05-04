import express from "express";
import mssql from 'mssql';
import data from './data.js';


var config = {
  user: 'sa',
  password: 'Strong.Pwd-123',
  server: 'localhost', 
  database: 'shopping',
  synchronize: true,
  options: { encrypt: false },   
};

// connect to your database
mssql.connect(config, function (err) {

  if (err) console.log(err);
  console.log("Connected!");


});


const app = express();
 // test
app.get('/api/products', (req, res) => {
  res.send(data.products);
});
app.get('/api/products/slug/:slug', (req, res) => {
  const product = data.products.find((x) => x.slug === req.params.slug);
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: 'Product Not Found' });
  }
});
app.get('/api/products/:id', (req, res) => {
  const product = data.products.find((x) => x._id === req.params.id);
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: 'Product Not Found' });
  }
});

app.post('/signin', (req,res) => {
  const username = req.body.username;
  const password = req.body.password
  db.query("Select * from Login where userName = ? and userPassword = ?",[username,password],
  (err,result) => {
      if(err){
          console.log(err)
      }else{
          res.send(result);
      }
  }
  )
});

const port = process.env.PORT || 4005;
app.listen(port, () => {
  console.log(`serve at http://localhost:${port}`);
});