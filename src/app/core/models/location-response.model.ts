export interface LocationResponse {
  ip: string;
  city: {
    name_ru: string;
    name_en: string;
  };
  region: {
    name_ru: string;
    name_en: string;
    timezone: string;
  };
  country: {
    iso: string;
    name_ru: string;
    name_en: string;
    timezone: string;
    phone: string;
  };
  error: string;
  request: number;
  created: string;
  timestamp: number;
}
