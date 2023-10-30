import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RecsenhaPage } from './recsenha.page';

describe('RecsenhaPage', () => {
  let component: RecsenhaPage;
  let fixture: ComponentFixture<RecsenhaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RecsenhaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
