import { APIResponseMany } from "@/types";

// Banner
export type Banner = {
  _id: string;
  image: string;
  isDeal: string;
  createdAt: Date;
};

export type GetBannersResponse = APIResponseMany<Banner>;
