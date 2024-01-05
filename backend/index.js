const express = require('express');
const bodyParser = require('body-parser');
const client = require('./config/connection');
const app = express();

const barangRoute = require('./routes/barangRouter');
const kasirRoute = require('./routes/kasirRouter');
const tenanRoute = require('./routes/tenanRouter');
const notaRoute = require('./routes/notaRouter');

app.use(bodyParser.json());

app.listen(5000, () =>{
    console.log('server running in port 5000')
})

client.connect(err => {
    if(err){
        console.log(err.message);
    } else{
        console.log('Connected');
    }
})

app.use("/", barangRoute)
app.use("/", kasirRoute)
app.use("/", tenanRoute)
app.use("/", notaRoute)