"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { Store } from "@/features/stores";
import { Coupon } from "@/features/coupon";

interface FavoriteItem {
  _id: string;
  type: "coupon" | "store";
  data: Coupon | Store;
}

interface FavoritesContextType {
  favorites: FavoriteItem[];
  loading: boolean;
  getFavorites: () => FavoriteItem[];
  removeFavorite: (id: string, type: "coupon" | "store") => void;
  getCoupons: () => Coupon[];
  getStores: () => Store[];
  addFavorite: (item: FavoriteItem) => void;
  isFavorite: (id: string, type: "coupon" | "store") => boolean;
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(
  undefined
);

interface FavoritesProviderProps {
  children: ReactNode;
}

export function FavoritesProvider({ children }: FavoritesProviderProps) {
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

  const addFavorite = (item: FavoriteItem) => {
    const isAlreadyFavorite = favorites.some(
      (fav) => fav._id === item._id && fav.type === item.type
    );

    if (!isAlreadyFavorite) {
      const updatedFavorites = [...favorites, item];
      setFavorites(updatedFavorites);

      if (typeof window !== "undefined") {
        try {
          localStorage.setItem("favorite", JSON.stringify(updatedFavorites));
        } catch (error) {
          console.error("Error saving favorites to localStorage:", error);
        }
      }
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

  const isFavorite = (id: string, type: "coupon" | "store"): boolean => {
    return favorites.some((fav) => fav._id === id && fav.type === type);
  };

  const value: FavoritesContextType = {
    favorites,
    loading,
    getFavorites,
    removeFavorite,
    getCoupons,
    getStores,
    addFavorite,
    isFavorite,
  };

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavoritesContext() {
  const context = useContext(FavoritesContext);
  if (context === undefined) {
    throw new Error(
      "useFavoritesContext must be used within a FavoritesProvider"
    );
  }
  return context;
}
