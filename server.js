 // Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Variable
// ==============================================================
var customers = [
  {
      "customerName": "Andrew",
      "phoneNumber": "1234567890",
      "customerEmail": "insanecrazeeguy@gmail.com",
      "customerID": "Kapar"
  },
  {
      "customerName": "Robert",
      "phoneNumber": "0987654321",
      "customerEmail": "normalguy@gmail.com",
      "customerID": "Ribbit"
      }
];

var waitlistCustomers = [
    {
        
    }
]

// Display API information
app.get('/tables', function(req, res){
    res.json(customers);
});

app.get('/tables', function(req, res){
    res.json(waitlistCustomers);
});

// Listener
// =================================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
