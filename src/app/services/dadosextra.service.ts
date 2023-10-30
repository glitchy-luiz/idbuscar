// import { Dadosextra } from '../models/dadosextra';
import { Injectable } from '@angular/core';
import { getFirestore } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore"; 
import { initializeApp } from "firebase/app";
import { AngularFirestore } from '@angular/fire/compat/firestore'; // Faz a importação do Angular Firestore
import { Dadouser } from 'src/models/Dadouser';

@Injectable({
  providedIn: 'root'
})

export class DadosextraService {
  // public dadosextra: Dadosextra

 

  constructor(private afs: AngularFirestore,) { }

  async salvar({nome, id}: {nome: any, id:any}) {
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
    const dadouser = await addDoc(collection(db, "users"), {
      nome,
      id
    });
    // return dadouser;
  } catch (e) {
    console.error("Error adding document: ", e);
  }
  }

  salve(dadouser: Dadouser){
    return this.afs.collection('users').add({...dadouser})
  }

  buscarPorId(id: string) {
    return this.afs.collection('users').doc(id).snapshotChanges();
  }

  testebusca(){
    return this.afs.collection('users').snapshotChanges();
  }

  
}
