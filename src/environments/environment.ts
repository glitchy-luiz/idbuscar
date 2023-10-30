// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { Injectable } from '@angular/core';
import { getFirestore } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore"; 
import { initializeApp } from "firebase/app";
import { FirestoreModule } from '@angular/fire/firestore';

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: "AIzaSyDBuEXy4Iu6SmbHicILRJvaXZGsJs7QpZY",
    authDomain: "db-kidcash.firebaseapp.com",
    databaseURL: "https://db-kidcash-default-rtdb.firebaseio.com",
    projectId: "db-kidcash",
    storageBucket: "db-kidcash.appspot.com",
    messagingSenderId: "221903420743",
    appId: "1:221903420743:web:107a6c259b6d99b3b0e062",
    measurementId: "G-XN6E7C4PRY"
  }
//   app = initializeApp(firebaseConfig);
//  const db = getFirestore(app);
};


/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
