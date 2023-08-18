import express from 'express'
import { generateUploadURL } from './s3.js'

var allowCrossDomain = function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
    res.header("Access-Control-Allow-Headers", "Content-Type");
    next();
  };  

const app = express()
app.use(express.json());
app.use(allowCrossDomain);
app.use(express.static('front'))

app.get('/s3Url', async (req, res) => {
  const url = await generateUploadURL()
  res.send({url})
})

app.listen(8080, () => console.log("listening on port 8080"))
