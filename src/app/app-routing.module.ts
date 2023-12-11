import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { NoIngresadoGuard } from './no-ingresado.guard';
import { IngresadoGuard } from './ingresado.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'passrec',
    redirectTo: 'passrec',
    pathMatch: 'full'
  },
  {
    path: 'registro',
    redirectTo: 'registro',
    pathMatch: 'full'
  },
  {
    path: 'creacion-vi',
    redirectTo:'creacion-vi',
    pathMatch:'full'    
  },
  
  /*
  {
    path: '**',
    redirectTo: 'p404',
    pathMatch: 'full'
  },
  */

  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule),
    //canActivate: [NoIngresadoGuard]
  },
  
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule),
    //canActivate: [NoIngresadoGuard]
  },
  {
    path: 'passrec',
    loadChildren: () => import('./passrec/passrec.module').then( m => m.PassrecPageModule),
    //canActivate: [NoIngresadoGuard]
  },
  
  {
    path: 'p404',
    loadChildren: () => import('./p404/p404.module').then( m => m.P404PageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./inicio/inicio.module').then( m => m.InicioPageModule),
    //canActivate:[IngresadoGuard]
  },
  {
    path: 'registro',
    loadChildren: () => import('./registro/registro.module').then( m => m.RegistroPageModule),
    //canActivate:[NoIngresadoGuard]
  },
  {
    path: 'ingreso-vehi',
    loadChildren: () => import('./ingreso-vehi/ingreso-vehi.module').then( m => m.IngresoVehiPageModule)
  },
  {
    path: 'creacion-vi',
    loadChildren: () => import('./creacion-vi/creacion-vi.module').then( m => m.CreacionViPageModule),
    //canActivate:[IngresadoGuard]
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

