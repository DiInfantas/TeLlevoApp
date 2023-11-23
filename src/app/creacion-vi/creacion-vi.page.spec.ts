import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreacionViPage } from './creacion-vi.page';

describe('CreacionViPage', () => {
  let component: CreacionViPage;
  let fixture: ComponentFixture<CreacionViPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CreacionViPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
