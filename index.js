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
var appId = '1xKHQ4OXmlNq1Yf1hbXgqA'
var appSecret = 'roIFnbGOMrmvyNkrBFEHpZO1D51DCLseCjEFmiIE0crmNucNDO2H3JLI4tu5Xcgb'

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
    location: req.query.zip,
    categories: 'coffee',
    radius: 8000
  };
  console.log(searchRequest);
  yelpClient.search(searchRequest).then(response => {
     var results = response.jsonBody;

     const prettyJson = JSON.stringify(results, null, 4);
    //  console.log(prettyJson);
     resp.json(results);
  });
});

app.get('/businessdata.json', function(req, resp) {
  console.log();
  // Bringing in the Yelp API for business details
  yelpClient.business(req.query.id).then(response => {
    console.log(response.jsonBody.name);
    var results = response.jsonBody;
    resp.json(results);
  }).catch(e => {
    console.log(e);
  });

});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
