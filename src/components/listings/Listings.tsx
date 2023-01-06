import ListingCard from "./ListingCard";
import data from "../../data.json";
import "./listings.css";

const Listings = () => {
    const listings =
        data.data.presentation.explore.sections.sections[1].section.child!
            .section.items;
    console.log(
        data.data.presentation.explore.sections.sections[1].section.child!
            .section.items
    );
    return (
        <div className='listings-container'>
            {listings?.map(listing => {
                return (
                    <ListingCard images={listing.listing.contextualPictures} />
                );
            })}
        </div>
    );
};

export default Listings;
