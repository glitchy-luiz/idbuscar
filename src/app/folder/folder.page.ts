import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CardsComponent } from './cards/cards.component';


@Component({
  selector: 'app-folder',
  templateUrl: 'folder.page.html',
  styleUrls: ['./folder.page.scss'],
  standalone: true,
  imports: [IonicModule, CardsComponent]
})

export class FolderPage implements OnInit {
  public folder!: string;
  private activatedRoute = inject(ActivatedRoute);

  constructor(
    private router: Router
  ) { }

  btnClicked() {
    this.router.navigate(['metas'])
  }

  btnClicked2() {
    this.router.navigate(['deveres'])
  }

  btnClicked3() {
    this.router.navigate(['gastos'])
  }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;
  }
}
