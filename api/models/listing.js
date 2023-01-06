const mongoose = require('mongoose');

const listingSchema = new mongoose.Schema({
    location: String,
})

const Listings = mongoose.model('Listings', listingSchema);

module.exports = Listings;