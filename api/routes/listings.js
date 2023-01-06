const express = require('express');
const mongoose = require('mongoose');
const Listing = require('../models/listing');
const router = express.Router();
const { getListings, setListing, updateListing, deleteListing } = require('../controllers/listingController');

mongoose.connect(process.env.DATABASE_URL, () => {
    console.log("Listings connected to database");
})

router.route('/').get(getListings).post(setListing).delete(deleteListing).put(updateListing);


module.exports = router;
