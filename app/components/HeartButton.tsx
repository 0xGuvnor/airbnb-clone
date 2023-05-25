"use client";

import useFavourite from "../hooks/useFavourite";
import { SafeUser } from "../types";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

interface Props {
  listingId: string;
  currentUser?: SafeUser | null;
}

const HeartButton = ({ listingId, currentUser }: Props) => {
  const { isFavourited, toggleFavourite } = useFavourite({
    listingId,
    currentUser,
  });

  return (
    <div
      onClick={toggleFavourite}
      className="relative transition cursor-pointer hover:opacity-80"
    >
      <AiOutlineHeart
        size={28}
        className="absolute fill-white -top-[2px] -right-[2px]"
      />
      <AiFillHeart
        size={24}
        className={isFavourited ? "fill-rose-500" : "fill-neutral-500/70"}
      />
    </div>
  );
};
export default HeartButton;
