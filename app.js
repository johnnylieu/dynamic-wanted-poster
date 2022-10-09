const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));

port = process.env.PORT || 3000;

app.get('/:firstName-:lastName', function(req, res){
    res.render('index', {firstName: req.params.firstName, lastName: req.params.lastName});
})

app.listen(port, function(){
    console.log(`Listening on port ${port}`);
})