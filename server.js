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
      "name": "Andrew",
      "phone": "1234567890",
      "email": "insanecrazeeguy@gmail.com",
      "customerID": "Kapar"
  },
  {
      "name": "Robert",
      "phone": "0987654321",
      "email": "normalguy@gmail.com",
      "customerID": "Ribbit"
      }
];

var waitlistCustomers = [
    {
      "name": "Taylor",
      "phone": "098765asdf4321",
      "email": "normalguy2@gmail.com",
      "customerID": "294858r48"
    }
]

// Display API information
app.get('/api/tables', function(req, res){
    res.json(customers);
});

app.get('/api/waitlist', function(req, res){
    res.json(waitlistCustomers);
});

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/tables", function(req, res) {
  res.sendFile(path.join(__dirname, "tables.html"));
});


// add new customer
// ================================================================
app.post("/api/new", function(req, res) {
    var newcustomer = req.body;
    // Using a RegEx Pattern to remove spaces from newCusmtomer name to create customerID
    newcustomer.customerID = newcustomer.name.replace(/\s+/g, "").toLowerCase();
  
    console.log(newcustomer);
  
    customers.push(newcustomer);
  
    res.json(newcustomer);
  });

// Listener
// =================================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
