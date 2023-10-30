import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore'; // Faz a importação do Angular Firestore
import { Dadouser } from '../../models/Dadouser';

@Injectable({
  providedIn: 'root'
})
export class DadouserService {

  constructor(private afs: AngularFirestore) { }  // Instancia na variável afs o Angular Firestore

  salvar(dadouser: Dadouser) {
    return this.afs.collection('dadousers').add({ ...dadouser });
  }

  buscarDadousers() {
    return this.afs.collection('dadousers').snapshotChanges();
  }

  buscarPorId(id: string) {
    return this.afs.collection('dadousers').doc(id).valueChanges();
  }

  alterar(dadouser: Dadouser) {
    return this.afs.collection('dadousers').doc(dadouser.id).update({ ...dadouser });
  }

  deletar(id: string) {
    return this.afs.doc('dadousers/' + id).delete();
  }
}