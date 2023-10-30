import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DeveresPage } from './deveres.page';

describe('DeveresPage', () => {
  let component: DeveresPage;
  let fixture: ComponentFixture<DeveresPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DeveresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
