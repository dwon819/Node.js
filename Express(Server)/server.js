const express = require('express');
const app = express();

const server = app.listen(3000, () => {
    console.log('Start Server : localhost:3000');
});
app.set('views',__dirname + '/views'); //folder mapping 같은 개념
app.set('view engine','ejs');//EJS EmbeddedJavaScript templates
app.engine('html',require('ejs').renderFile);

app.get('/', function (req, res) {
    res.render('index.html')//render 페이지 이동
});//하나의 라우터

// app.get('/about', function (req, res) {
//     res.send('about page')
// });

app.get('/about',function(req,res){
    res.render('about.html')
});
