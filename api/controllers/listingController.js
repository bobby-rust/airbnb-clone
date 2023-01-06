const Listing = require('../models/listing');

/**
 * @description Get all listings
 * @route GET /api/listings 
 */
const getListings = async (req, res) => {
    const listings = await Listing.find()
    res.status(200).json(listings)
}

/**
 * @description Create a listing
 * @route POST /api/listings
 */
const setListing = async (req, res) => {
    if (!req.body.location) {
        throw new Error("Please provide a location field")
    }
    const newListing = await Listing.create({
        location: req.body.location
    })
    res.status(200).json(newListing);
}

/**
 * @description Update a listing
 * @route PUT /api/listing
 */
const updateListing = async (req, res) => {
    const listing = await Listing.findById(req.body.id);

    if (!listing) {
        res.status(400);
        throw new Error("Listing not found")
    }

    const updatedListing = await Listing.findByIdAndUpdate(req.body.id, req.body)
    res.status(200).json(updatedListing);
}

/**
 * @description Delete a listing
 * @route DELETE /api/listings
 */
const deleteListing = async (req, res) => {

    const listing = await Listing.findById(req.body.id);

    if (!listing) {
        res.status(400);
        throw new Error("Listing not found")
    }

    await listing.remove();
    res.status(200).json({ id: req.body.id });
}

module.exports = {
  getListings, 
  setListing,
  updateListing,
  deleteListing
}