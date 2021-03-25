//importing the express library/framework
const express = require('express');
const mongoose = require('mongoose');

//instantiating express in constant app
const app = express();

//db connection
mongoose.connect(process.env.DATABASE, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection
  .on('open', () => {
    console.log('Mongoose connection open');
  })
  .once('error', (err) => {
    console.log(`Connection error: ${err.message}`);
  });

//middleware
app.use(express.urlencoded({ extended: true }));
//configurations- setting pug as templete engine
app.set('view engine', 'pug');
app.set('views', './views');

//custom middleware
app.use((req, res, next) => {
  console.log('a new request received aat ' + Date.now());
  next();
});

//middleware for serving static files(csss, js , images)
app.use(express.static('public'));

//
//import employee route
const employeeRoutes = require('./routes/employeeRoute');

//instantiting employee route
app.use('/employee', employeeRoutes);


//server to run at port 3000
app.listen(3000, () => console.log('listening on port 3000'));

