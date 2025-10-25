export const routes = {
  home: "/",
  store: "/store",
  storeDetail: (id: string) => `/store/${id}`,
  coupon: "/coupon",
  couponDetail: (id: string) => `/coupon/${id}`,
  category: "/category",
  categoryDetail: (id: string) => `/category/${id}`,
  about: "/about",
  contact: "/contact",
  favorite: "/favorite",
  privacy: "/privacy",
  terms: "/terms",
};
