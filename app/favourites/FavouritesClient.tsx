"use client";

import Container from "../components/Container";
import Heading from "../components/Heading";
import ListingCard from "../components/listings/ListingCard";
import { SafeListing, SafeUser } from "../types";

interface Props {
  favourites: SafeListing[];
  currentUser?: SafeUser | null;
}

const FavouritesClient = ({ favourites, currentUser }: Props) => {
  return (
    <Container>
      <Heading
        title="Favourites"
        subtitle="All your favourited properties will appear here"
      />
      <div className="grid grid-cols-1 gap-8 mt-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
        {favourites.map((favourite) => (
          <ListingCard
            key={favourite.id}
            currentUser={currentUser}
            data={favourite}
          />
        ))}
      </div>
    </Container>
  );
};
export default FavouritesClient;
