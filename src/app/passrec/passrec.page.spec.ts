import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PassrecPage } from './passrec.page';

describe('PassrecPage', () => {
  let component: PassrecPage;
  let fixture: ComponentFixture<PassrecPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PassrecPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
