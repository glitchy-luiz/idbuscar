import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TipofamiliaPage } from './tipofamilia.page';

describe('TipofamiliaPage', () => {
  let component: TipofamiliaPage;
  let fixture: ComponentFixture<TipofamiliaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TipofamiliaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
