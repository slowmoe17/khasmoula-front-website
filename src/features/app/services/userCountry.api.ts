import axios from "axios";

export const getUserCountry = async () => {
  const { data } = await axios.get("https://ipapi.co/json");
  return data.country;
};
