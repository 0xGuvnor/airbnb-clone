import getCurrentUser from "@/app/actions/getCurrentUser";
import prisma from "@/app/lib/prismadb";
import { NextResponse } from "next/server";

interface Params {
  listingId?: string;
}

export const DELETE = async (
  req: Request,
  { params: { listingId } }: { params: Params }
) => {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return NextResponse.error();
  }

  if (!listingId || typeof listingId !== "string") {
    throw new Error("Invalid ID");
  }

  const listing = await prisma.listing.deleteMany({
    where: {
      id: listingId,
      userId: currentUser.id,
    },
  });

  return NextResponse.json(listing);
};
