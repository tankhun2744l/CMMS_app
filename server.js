const express = require('express')
const session = require('express-session')
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 5000
cors = require("cors")

const app = express();
const routerDB = require('./Route/conDb');
app.get('/', (req, res) => {
  res.json({ message: 'hello!' });
});
app.use(express.json({limit: '50mb'}))
app.use(cors())
app.use(bodyParser.urlencoded({extended:true}))
app.use('/DB',routerDB) 
app.use('./netlify/functions/api',routerDB)
app.listen(PORT, () => {
  console.log('Application is running on port 5000');
});

