const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors'); // -> communication between fe be
const bearerToken = require('express-bearer-token') // -> token generator

require('dotenv').config();

const PORT = process.env.PORT || 8080

app.use(cors());
app.use(bearerToken())
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: false })); // buat user kirim data ke server
app.use(express.static('public'));


app.get('/',(request, respond)=>{    
    respond.send(`Selamat Datang di API JOINTRIP!`);
});


app.listen(PORT,()=>console.log('API aktif di port '+PORT));

