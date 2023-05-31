import getCurrentUser from "../actions/getCurrentUser";
import getFavouritedListings from "../actions/getFavouritedListings";
import EmptyState from "../components/EmptyState";
import FavouritesClient from "./FavouritesClient";

const FavouritesPage = async () => {
  const favourites = await getFavouritedListings();
  const currentUser = await getCurrentUser();

  return favourites.length === 0 ? (
    <EmptyState
      title="No favourites found"
      subtitle="Your favourited propterties will appear here"
    />
  ) : (
    <FavouritesClient favourites={favourites} currentUser={currentUser} />
  );
};
export default FavouritesPage;
