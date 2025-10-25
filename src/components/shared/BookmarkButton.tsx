"use client";

import React from "react";
import { Store } from "@/features/stores";
import { BookmarkIcon } from "../icons";
import { Coupon } from "@/features/coupon";
import { useFavoritesContext } from "@/context/FavoritesContext";

interface BookmarkButtonProps {
  item: Coupon | Store;
  type: "coupon" | "store";
}

function BookmarkButton(props: BookmarkButtonProps) {
  const { item, type } = props;
  const { isFavorite, addFavorite, removeFavorite } = useFavoritesContext();

  const isBookmarked = isFavorite(item._id, type);

  const handleBookmark = () => {
    if (isBookmarked) {
      removeFavorite(item._id, type);
    } else {
      addFavorite({
        _id: item._id,
        type,
        data: item,
      });
    }
  };

  return (
    <button
      type="button"
      className={`shadow-[0px_0px_2px_0px_#00000040] group hover:bg-primary-light-active transition-all duration-300 w-12 h-12 rounded-full overflow-hidden flex items-center justify-center ${
        isBookmarked ? "bg-primary" : "bg-white"
      }`}
      onClick={handleBookmark}
    >
      <BookmarkIcon
        className={`size-6 transition-all duration-300 ${
          isBookmarked ? "text-white" : "text-primary group-hover:text-white"
        }`}
      />
    </button>
  );
}

export default BookmarkButton;
