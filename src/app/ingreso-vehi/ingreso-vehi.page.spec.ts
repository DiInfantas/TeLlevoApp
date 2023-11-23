import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IngresoVehiPage } from './ingreso-vehi.page';

describe('IngresoVehiPage', () => {
  let component: IngresoVehiPage;
  let fixture: ComponentFixture<IngresoVehiPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(IngresoVehiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
