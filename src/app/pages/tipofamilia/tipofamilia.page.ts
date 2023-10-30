import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { AuthService } from 'src/app/services/auth.service';
// import {VeruserService} from 'src/app/services/veruser.service'
import { DadosextraService } from 'src/app/services/dadosextra.service';
import { Dadouser } from 'src/models/Dadouser';
import { collection, addDoc } from "firebase/firestore"; 
import { initializeApp } from "firebase/app";
import { provideFirestore, getFirestore } from '@angular/fire/firestore'



@Component({
  selector: 'app-tipofamilia',
  templateUrl: './tipofamilia.page.html',
  styleUrls: ['./tipofamilia.page.scss'],
})
export class TipofamiliaPage implements OnInit {

 user:any|undefined;

 public listausers: Dadouser[] = []

  constructor(
    private loadingController: LoadingController,
    private alertController: AlertController,
    private authService: AuthService,
    private route: Router,
    private rotaativa: ActivatedRoute,
    private dados: DadosextraService
  ) { }

  ngOnInit() {
    this.testebusca();

    this.user = this.rotaativa.snapshot.params['id']
    console.log(this.user)
    

    // this.dados.buscarPorId(this.user.uid).subscribe(dadosretorno =>{
    //   this.listausers =dadosretorno.map((registro:any) => (
    //     {
    //       uid: registro.payload.doc.id,
    //       nome: registro.payload.doc.data()['nome']
    //     }
    //     ))
    //   })

      this.dados.buscarPorId(this.user).subscribe((dados:any) => {
        this.user.nome = dados['nome']
      })

      console.log(this.listausers)
  }

  testebusca(){

    this.dados.testebusca().subscribe(dadosretorno =>{
      this.listausers =dadosretorno.map((registro:any) => (
        {
          id: registro.payload.doc.id,
          nome: registro.payload.doc.data()['nome'],
          // uid: registro.payload.doc.data()['uid']
          
        }
        ))
      })
      console.log(this.listausers)
  }

  // filtro(){
  //   if (this.user == this.listausers.uid) {

  //   }
  // }
  

  async logout() {
    await this.authService.logout()
    this.route.navigateByUrl('/', { replaceUrl:true});
  }

}
