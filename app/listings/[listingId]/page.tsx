import getCurrentUser from "@/app/actions/getCurrentUser";
import getListingById from "@/app/actions/getListingById";
import EmptyState from "@/app/components/EmptyState";
import ListingClient from "./ListingClient";

interface Params {
  listingId?: string;
}

const ListingPage = async ({ params }: { params: Params }) => {
  const listing = await getListingById(params);
  const currentUser = await getCurrentUser();

  return listing ? (
    <ListingClient listing={listing} currentUser={currentUser} />
  ) : (
    <EmptyState />
  );
};
export default ListingPage;
