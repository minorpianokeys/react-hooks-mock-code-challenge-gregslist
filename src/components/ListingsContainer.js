import React, { useState, useEffect } from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ searchInput }) {
  const [listings, setListings] = useState([])

  useEffect(() => {
    fetch("http://localhost:6001/listings")
    .then(r => r.json())
    .then(listings => setListings(listings))
  }, [])

  function handleDeleteListing(deletedListing) {
    const updatedListings = listings.filter(listing => {
      return listing.id !== deletedListing.id
    })
    setListings(updatedListings)
  }

    const listingsToDisplay = listings.filter(listing => {
      console.log(listing.description, searchInput)
        return listing.description.toLowerCase().includes(searchInput.toLowerCase());
    })

  return (
    <main>
      <ul className="cards">
        {listingsToDisplay.map(listing => (
          <ListingCard 
          key={listing.id}
          listing={listing}
          onDeleteListing={handleDeleteListing}
          />
        ))}
      </ul>
    </main>
  );
}

export default ListingsContainer;
