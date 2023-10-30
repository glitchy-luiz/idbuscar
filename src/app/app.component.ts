import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { register } from 'swiper/element/bundle';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

register();

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})

export class AppComponent {
  public appPages = [
    // title: 'Home', url: '/folder/inbox', icon: 'mail' 
    { title: 'Home', url: '/folder'},
    { title: 'Metas', url: '/metas'},
    { title: 'Gastos', url: '/gastos'},
    { title: 'Deveres', url: '/deveres'},
    { title: 'Ganhos', url: '/ganhos'},
    { title: 'Estatística', url: '/estatistica'},
    { title: 'Perfil', url: '/perfil'},
    { title: 'Alterar perfil', url: '/'}
  ];

  constructor(
    private authService: AuthService,
    private router: Router) {}

  async logout() {
    await this.authService.logout()
    this.router.navigateByUrl('/', { replaceUrl:true});
  }

}
