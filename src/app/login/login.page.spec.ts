import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { LoginPage } from './login.page';

describe('LoginPage', () => {
  let component: LoginPage;
  let fixture: ComponentFixture<LoginPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
    
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Deberia iniciar con las validaciones', () => {
    const formulario = component.formularioLogin;
    const usuarioControl = formulario.get('Usuario');
    const passwordControl = formulario.get('password')

    expect(usuarioControl).toBeTruthy();
    expect(usuarioControl.hasError('required')).toBeTruthy();

    expect(passwordContrl).toBeTruthy();
    expect(passwordControl.hasError('required')).toBeTruthy();

    
          });

it('Deberia validar cuando el usuario esta bien', () => {
    const formulario = component.formularioLogin;
    formulario.setValue({
      Usuario: 'testUser',
      password: 'testPassword',
    });

    expect(formulario.valid).toBeTruthy();
  });

  it('Deberia llamar ingrear couando el form es sunmitted', async(() => {
    spyOn(component, 'ingresar');
    const formulario = component.formularioLogin;
    formulario.setValue({
      Usuario: 'testUser',
      password: 'testPassword',
    });

    component.ingresar();

    fixture.whenStable().then(() => {
      expect(component.ingresar).toHaveBeenCalled();
    });
  }));

});
