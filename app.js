
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

//static files
app.use(express.static('public'))
app.use('/css', express.static(__dirname+'public/css'))
app.use('/img', express.static(__dirname+'public/img'))
app.use('/js', express.static(__dirname+'public/js'))

//Templating Engine
app.set('views', './src/views')
app.set('view engine', 'ejs')

//Routes
const homeRouter = require(__dirname+'/src/routes/home')

app.use('/', homeRouter)

app.listen(3000, ()=>{
    console.log("server running on port 3000");
})