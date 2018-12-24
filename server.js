var express = require("express");
var app = express();
const path = require('path');
var bodyParser = require('body-parser')


function requireHTTPS(req, res, next) {
    if (req.headers && req.headers.$wssp === "80") {
        return res.redirect('https://' + req.get('host') + req.url);
    }
    next();
}
app.use(requireHTTPS);


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
app.use(express.static(__dirname + '/dist/'));
app.get('/*', (request, response) => {
	response.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

//serve static file (index.html, images, css)


var port = process.env.PORT || 8000
app.listen(port, function() {
    console.log("To view your app, open this link in your browser: http://localhost:" + port);
});
