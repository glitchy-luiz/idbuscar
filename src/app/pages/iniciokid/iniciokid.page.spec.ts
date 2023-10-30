import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IniciokidPage } from './iniciokid.page';

describe('IniciokidPage', () => {
  let component: IniciokidPage;
  let fixture: ComponentFixture<IniciokidPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(IniciokidPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
