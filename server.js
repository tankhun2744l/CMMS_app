const express = require('express')
const session = require('express-session')
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 5000
cors = require("cors")

const app = express();
const routerDB = require('./Route/conDb');

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'https://644bdd93bcc826238878d7a1--hilarious-taiyaki-075d8b.netlify.app');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
    return res.status(200).json({});
  }
  next();
});
app.get('/', (req, res) => {
  res.json({ message: 'hello!' });
});
app.use(express.json({limit: '50mb'}))
app.use(cors({
  origin: ['*','https://cmms-oa.herokuapp.com/DB/get/status/device/','http://localhost:3000','https://644d455a63f0753206818e65--glittering-pavlova-b27c16.netlify.app','https://cute-kringle-f18ef0.netlify.app'],
  credentials : true
}));
app.use(bodyParser.urlencoded({extended:true}))
app.use('/DB',routerDB) 
app.listen(PORT, () => {
  console.log('Application is running on port 5000');
});