// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  GEO_IP_API: 'https://ipinfo.io/json?token=7d20f8fac5d1b9',
  GEO_API:
    'https://api.opencagedata.com/geocode/v1/json?key=22210692fa88443f8c70ccc6afa10f90&language=native',
  SERVER_URL: 'http://localhost:3004',
  // SERVER_URL: 'https://rs-shop-json-server.herokuapp.com',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
