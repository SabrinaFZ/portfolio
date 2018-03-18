var express        = require('express'),
    app            =  express(),
    path           = require('path'),
    sassMiddleware = require('node-sass-middleware');
    srcPath        = __dirname + '/sass';
    destPath       = __dirname + '/public/stylesheets';
    port           = (process.env.PORT || 3000);

//SET DEFAULT VIEW TEMPLATE
app.set('view engine', 'pug');

//CONVERT SASS FILES INTO CSS FILES
app.use(sassMiddleware({
  src: srcPath,
  dest: destPath,
  debug: true,
  outputStyle: 'compressed',
}));

//ASSETS
app.use(express.static(__dirname + '/public'));

//ROUTES
app.get('/', function (req, res) { 
  res.render("index");
});

//START SERVER
app.listen(port, function(){
  console.log(`Listening at http://localhost:${port}`);
});
