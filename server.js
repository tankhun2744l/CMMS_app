const express = require('express')
const session = require('express-session')
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 5000
// cors = require("cors")

const app = express();
const routerDB = require('./Route/conDb');

const cors = require('cors');
const corsOptions ={
    origin:'https://inspiring-fox-feafbe.netlify.app', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
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
// app.use(cors({
//   origin: ['*','https://cmms-oa.herokuapp.com/DB/get/status/device/','http://localhost:3000']
// }));
app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({extended:true}))
app.use('/DB',routerDB) 
app.listen(PORT, () => {
  console.log('Application is running on port 5000');
});