import API from 'API-keys'

var express = require('express');
var app = express();

var yelp = require('yelp-fusion');

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('pages/index');
});

// Make these enviroment variables to keep my clientId and API key hidden without losing the data pulled in from Yelp

var yelpClient;

yelp.accessToken(appId, appSecret).then(response => {
  yelpClient = yelp.client(response.jsonBody.access_token);
}).catch(e => {
  console.log(e);
});

app.get('/yelpdata.json', function(req, resp) {

//  console.log("ZIP: " + req.query.zip)
  // FIXME: Filter or control for valid values of 'zip'
  var searchRequest = {
    term: '',
    location: req.query.zip || '78230',
    categories: 'coffee',
    radius: 8000
  };

  yelpClient.search(searchRequest).then(response => {
     const firstResult = response.jsonBody.businesses;

     const prettyJson = JSON.stringify(firstResult, null, 4);
     console.log(prettyJson);

     resp.json(firstResult);
  });

});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
