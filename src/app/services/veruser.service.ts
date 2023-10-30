import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class VeruserService {

  constructor(private afAuth: AngularFireAuth, private firestore: AngularFirestore) { }

//   async getUID() {
//     const user = await this.afAuth.currentUser;
//     if (user) {
//       return user.uid;
//     } else {
//       // O usuário não está autenticado
//       return null;
//     }
// }

// getUserInfoByUID(uid: string) {
//   return this.firestore.collection('usuarios').doc(uid).valueChanges();
// }

// async getLoggedInUserInfo() {
//   const uid = await this.getUID();
//   if (uid) {
//     return this.getUserInfoByUID(uid);
//   } else {
//     return null;
//   }
// }

}