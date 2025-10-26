// API Types
export type APIResponseMeta = {
  page: number;
  totalPages: number;
  limit: number;
  total: number;
};

export type APIResponseMany<T> = {
  meta: APIResponseMeta;
  data: T[];
};

export type APIResponseMessage = {
  message: string;
};

export type APIFilters = {
  page?: number;
  limit?: number | false;
  search?: string;
  [key: string]: string | number | boolean | undefined;
};

// Localization Types
export type TFunction = (key: string) => string;
