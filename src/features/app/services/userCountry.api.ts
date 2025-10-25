import axios from "axios";

export const getUserCountry = async () => {
  const { data } = await axios.get("/api/get-country");
  return data;
};
