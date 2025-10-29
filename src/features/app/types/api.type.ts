import { APIResponseMany } from "@/types";

export type Country = {
  _id: string;
  name: string;
  code: string;
  image: string;
};

export type GetCountriesResponse = APIResponseMany<Country>;
