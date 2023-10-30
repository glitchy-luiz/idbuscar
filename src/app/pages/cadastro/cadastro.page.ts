import { FirestoreModule } from '@angular/fire/firestore';
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validator, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AlertController, LoadingController } from "@ionic/angular";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { AuthService } from "src/app/services/auth.service";
import { provideFirestore, getFirestore } from '@angular/fire/firestore'
// import { Dadosextra } from 'src/app/models/dadosextra';
import { DadosextraService } from 'src/app/services/dadosextra.service';
import { Dadouser } from 'src/models/Dadouser';
import { doc, setDoc } from "firebase/firestore"; 
import { collection, addDoc } from "firebase/firestore"; 
import { initializeApp } from "firebase/app";

@Component({
  selector: "app-cadastro",
  templateUrl: "./cadastro.page.html",
  styleUrls: ["./cadastro.page.scss"],
})
export class CadastroPage implements OnInit {
  credentials: FormGroup = this.fb.group({});

  use: Dadouser = new Dadouser();
  use2: Dadouser[] = []
 user =  this.authService.register(this.credentials.value);

  constructor(
    private afs: FirestoreModule,
    private fb: FormBuilder,
    private loadingController: LoadingController,
    private alertController: AlertController,
    private authService: AuthService,
    private router: Router,
    private dados: DadosextraService
  ) {}

  get nome(){
    return this.credentials.get('nome')
  }
  get confsenha() {
    return this.credentials.get("confsenha");
  }

  get email() {
    return this.credentials.get("email");
  }

  get password() {
    return this.credentials.get("password");
  }

  ngOnInit() {
    this.credentials = this.fb.group({
      id: [""],
      nome: [""],
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(6)]],
      confsenha: ["", [Validators.required, Validators.minLength(6)]],
    });
  }

  firebaseConfig = {
    apiKey: "AIzaSyDBuEXy4Iu6SmbHicILRJvaXZGsJs7QpZY",
    authDomain: "db-kidcash.firebaseapp.com",
    databaseURL: "https://db-kidcash-default-rtdb.firebaseio.com",
    projectId: "db-kidcash",
    storageBucket: "db-kidcash.appspot.com",
    messagingSenderId: "221903420743",
    appId: "1:221903420743:web:107a6c259b6d99b3b0e062",
    measurementId: "G-XN6E7C4PRY"
};
app = initializeApp(this.firebaseConfig);
db = getFirestore(this.app);
  

  async salvar(){
    if (this.password?.value === this.confsenha?.value) {
    const dadouser = await this.dados.salvar(this.credentials.value);
    
    }
  }

  salve(){
    if (this.password?.value === this.confsenha?.value) {
        this.dados.salve(this.use)
      }
  }

  async register() {
    if (this.password?.value === this.confsenha?.value) {
      const loading = await this.loadingController.create();
      await loading.present();

      const user = await this.authService.register(this.credentials.value);
      await loading.dismiss();
      console.log(user)

      if (user) {
        const dadouser = await addDoc(collection(this.db, "users"), {
          id: user.user.uid,
          nome: this.nome
        });
        this.router.navigateByUrl("/home", { replaceUrl: true });
      } else {
        this.showAlert("Registro falhou", "tente novamente!");
      }
    } else {
      this.showAlert("Erro nas senhas", "as senhas não são iguais");
    }
  }

  async login() {
    const loading = await this.loadingController.create();
    await loading.present();

    const user = await this.authService.login(this.credentials.value);
    await loading.dismiss();

    if (user) {
      
      console.log(user);
      this.router.navigateByUrl("/home", { replaceUrl: true });
    } else {
      this.showAlert("Login falhou", "tente novamente!");
    }
  }

  async showAlert(header: string, message: string) {
    const alert = await this.alertController.create({
      header,
      message,
      buttons: ["ok"],
    });
    await alert.present();
  }
}
