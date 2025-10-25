"use client";

import { useState, useEffect } from "react";
import { Store } from "@/features/stores";
import { Coupon } from "@/features/coupon";

interface FavoriteItem {
  _id: string;
  type: "coupon" | "store";
  data: Coupon | Store;
}

export function useFavorites() {
  const [favorites, setFavorites] = useState<FavoriteItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadFavorites = () => {
      if (typeof window === "undefined") {
        setLoading(false);
        return;
      }

      try {
        const storedFavorites = localStorage.getItem("favorite");
        const parsedFavorites = storedFavorites
          ? JSON.parse(storedFavorites)
          : [];
        setFavorites(parsedFavorites);
      } catch (error) {
        console.error("Error reading favorites from localStorage:", error);
        setFavorites([]);
      } finally {
        setLoading(false);
      }
    };

    loadFavorites();
  }, []);

  const getFavorites = (): FavoriteItem[] => {
    if (typeof window === "undefined") return [];

    try {
      const favorites = localStorage.getItem("favorite");
      return favorites ? JSON.parse(favorites) : [];
    } catch (error) {
      console.error("Error reading favorites from localStorage:", error);
      return [];
    }
  };

  const removeFavorite = (id: string, type: "coupon" | "store") => {
    const updatedFavorites = favorites.filter(
      (fav) => !(fav._id === id && fav.type === type)
    );
    setFavorites(updatedFavorites);

    if (typeof window !== "undefined") {
      try {
        localStorage.setItem("favorite", JSON.stringify(updatedFavorites));
      } catch (error) {
        console.error("Error saving favorites to localStorage:", error);
      }
    }
  };

  const getCoupons = (): Coupon[] => {
    return favorites
      .filter((fav) => fav.type === "coupon")
      .map((fav) => fav.data as Coupon);
  };

  const getStores = (): Store[] => {
    return favorites
      .filter((fav) => fav.type === "store")
      .map((fav) => fav.data as Store);
  };

  return {
    favorites,
    loading,
    getFavorites,
    removeFavorite,
    getCoupons,
    getStores,
  };
}
