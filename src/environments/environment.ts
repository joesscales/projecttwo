// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: "AIzaSyC9sqoySsjpNd0ycbMB5oV98JGoiCAGJo0",
    authDomain: "projecttwo-c4839.firebaseapp.com",
    projectId: "projecttwo-c4839",
    storageBucket: "projecttwo-c4839.appspot.com",
    messagingSenderId: "633265970125",
    appId: "1:633265970125:web:7d7dcd066a6cbebb364284",
    measurementId: "G-6J1CE8B4H7"
  },
  stripe:{
    push: "pk_test_51Kj1mgKGPCnyjU4r7zk7Ly0QKuHsDVxMNTDH8pFkhIpdlVJ1181Ddcal7xgum9cHzirt3neW6c13GOzAfBwrloGr00OgvsNccG",
    key: "sk_test_51Kj1mgKGPCnyjU4r11qN3T9GjDiF3BW1NeupI7UZqpiMQIEIqe9w0aI9iVQWF0PSSUnaoXNWZXpADdL1fuPAVmcf00GBKgGUP9"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
