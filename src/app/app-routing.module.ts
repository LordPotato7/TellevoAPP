import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { NoAuthGuard } from './guards/no-auth.guard';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'homeuser',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./user/login/login.module').then( m => m.LoginPageModule),
  },
  {
    path: 'register',
    loadChildren: () => import('./user/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'recuperar',
    loadChildren: () => import('./user/recuperar/recuperar.module').then( m => m.RecuperarPageModule)
  },
  {
    path: 'homeuser',
    loadChildren: () => import('./user/home-user/home-user.module').then( m => m.HomeUserPageModule)
  },
  {
    path: 'home-p',
    loadChildren: () => import('./pasajero/home-p/home-p.module').then( m => m.HomePPageModule)
  },
  {
    path: 'home-c',
    loadChildren: () => import('./conductor/home-c/home-c.module').then( m => m.HomeCPageModule)
  },
  {
    path: 'modificar-viaje',
    loadChildren: () => import('./conductor/modificar-viaje/modificar-viaje.module').then( m => m.ModificarViajePageModule)
  },
  {
    path: 'crear-viaje',
    loadChildren: () => import('./conductor/crear-viaje/crear-viaje.module').then( m => m.CrearViajePageModule)
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
