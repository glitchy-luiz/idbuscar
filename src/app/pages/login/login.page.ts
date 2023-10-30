import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  credentials: FormGroup = this.fb.group({})


  constructor(
    // public credentials: FormGroup,
    private fb: FormBuilder,
    private loadingController: LoadingController,
    private alertController: AlertController,
    private authService: AuthService,
    private router: Router
  ) { }
  // credentials = this.fb.group({})

  get email(){
    return this.credentials.get('email');
  }

  get password(){
    return this.credentials.get('password');
  }

  ngOnInit() {
    this.credentials = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }


  // async register() {
  //   const loading = await this.loadingController.create();
  //   await loading.present();

  //   const user = await this.authService.register(this.credentials.value);
  //   await loading.dismiss();

  //   if (user) {
  //     this.router.navigateByUrl('/home', { replaceUrl: true});
  //   } else {
  //     this.showAlert('Registro falhou', 'tente novamente!');
  //   }
  // }

  async login() {
    const loading = await this.loadingController.create();
    await loading.present();

    const user = await this.authService.login(this.credentials.value);
    await loading.dismiss();

    if (user) {
      console.log(user);
      this.router.navigateByUrl(`/tipofamilia/${user.user.uid}`, { replaceUrl: true});
    } else {
      this.showAlert('Login falhou', 'tente novamente!');
    }
  }

  async showAlert(header: string, message: string){
    const alert = await this.alertController.create({
      header,
      message,
      buttons: ['ok'],
    });
    await alert.present();
  }

}

