//import { Mongoose } from "mongoose";

var mongoose = require('mongoose'),  
Listing = require('./ListingSchema.js'),
config = require('./config');

/* Add all the required libraries*/

/* Connect to your database using mongoose - remember to keep your key secret*/
mongoose.connect(config.db.uri, {useNewUrlParser: true});

/* Fill out these functions using Mongoose queries*/
//Check out - https://mongoosejs.com/docs/queries.html

var findLibraryWest = function() {
  /* 
    Find the document that contains data corresponding to Library West,
    then log it to the console. 
   */
  Listing.find({name: 'Library West'}, function(err, listing){
     if(err){
       throw err;
     }
     console.log(listing);
  });
  
};
var removeCable = function() {
  /*
    Find the document with the code 'CABL'. This cooresponds with courses that can only be viewed 
    on cable TV. Since we live in the 21st century and most courses are now web based, go ahead
    and remove this listing from your database and log the document to the console. 
   */
  var temp;
  Listing.findOneAndRemove({code: 'CABL'}, function(err, listing){
     if(err){
       throw err;
     }
     temp = listing;
     console.log(temp);
  });

};
var updatePhelpsMemorial = function() {
  /*
    Phelps Memorial Hospital Center's address is incorrect. Find the listing, update it, and then 
    log the updated document to the console. 
   */

  Listing.findOneAndUpdate({code: 'PHL'}, {address: '1953 Museum Rd, Gainesville, FL 32603'}, {useFindAndModify: false}, function(err, listing){
       if(err){
         throw err;
       }
       console.log(listing);
  });
};
var retrieveAllListings = function() {
  /* 
    Retrieve all listings in the database, and log them to the console. 
   */
  Listing.find({}, function(err, listing) {
    if (err) throw err;
  
    // object of all the users
    console.log(listing);
  });
};

findLibraryWest();
removeCable();
updatePhelpsMemorial();
retrieveAllListings();