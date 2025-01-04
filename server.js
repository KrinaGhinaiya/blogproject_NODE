const express = require('express');
const app = express();
const port = 2612;
const bodyParser = require('body-parser');

const path = require('path')
const database = require('./config/db');
app.use(bodyParser.urlencoded({ extended: true }));
const cookieparser = require('cookie-parser');

app.set('view engine' , 'ejs');

app.use("/uploads",express.static(path.join(__dirname,"uploads")))

app.use("/images", express.static(path.join(__dirname, "images"))); 

app.use(cookieparser());

app.use(express.urlencoded());

app.use('/',require('./routes/blogRoutes'));

app.listen(port , (err) =>{
    if(err){
        console.log(err);
        return false;
    }
    console.log(`Server Start at http://localhost:${port}`);
})