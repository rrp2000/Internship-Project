const express = require('express');
const bodyParser = require('body-parser');
const route = require('../src/Route/route');
const { default: mongoose } = require('mongoose');
const app = express();

app.use(bodyParser.json());

const multer = require('multer')
app.use(multer().any());


mongoose.connect("mongodb+srv://spacespider:admin@cluster0.0ps1ymn.mongodb.net/group64Database?retryWrites=true&w=majority",
    { useNewUrlParser: true })
    .then(() => console.log("MongoDb is connected"))
    .catch(err => console.log(err))

app.use('/', route);

app.listen(process.env.PORT || 3001, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3001))
});
