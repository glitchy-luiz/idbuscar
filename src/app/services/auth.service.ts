import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from '@angular/fire/auth'
import { addDoc, collection } from 'firebase/firestore';
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private auth: Auth) { }

  async register({ nome, email, password}: {nome: any, email: any; password:any}) {
    const firebaseConfig = {
      apiKey: "AIzaSyDBuEXy4Iu6SmbHicILRJvaXZGsJs7QpZY",
      authDomain: "db-kidcash.firebaseapp.com",
      databaseURL: "https://db-kidcash-default-rtdb.firebaseio.com",
      projectId: "db-kidcash",
      storageBucket: "db-kidcash.appspot.com",
      messagingSenderId: "221903420743",
      appId: "1:221903420743:web:107a6c259b6d99b3b0e062",
      measurementId: "G-XN6E7C4PRY"
  };
   const app = initializeApp(firebaseConfig);
 const db = getFirestore(app);
    try {
      const user = await createUserWithEmailAndPassword(
        this.auth,
        email,
        password
       )
      return user;
    } catch (e) {
      return null;
    }
  }


  async login({ email, password}: {email: any; password:any}) {
    try {
      const user = await signInWithEmailAndPassword(
        this.auth,
        email,
        password
      );
      return user;
    } catch (e) {
      return null;
    }
  }

  logout(){
    return signOut(this.auth);
  }
}
