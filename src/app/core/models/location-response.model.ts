export interface IIpLocationResponse {
  city: string;
  country: string;
  hostname: string;
  ip: string;
  loc: string;
  org: string;
  postal: string;
  region: string;
  timezone: string;
}

export interface ILocationResponse {
  results: [
    {
      components: {
        city: string;
        town: string;
        village: string;
        country: string;
      };
    }
  ];
}
