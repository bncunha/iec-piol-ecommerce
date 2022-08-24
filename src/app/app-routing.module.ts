import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/guards/auth.guard';

const routes: Routes = [
  {path: '', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)},
  {path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule)},
  {path: 'cadastro', loadChildren: () => import('./pages/signup/signup.module').then(m => m.SignupModule)},
  {path: 'produto', loadChildren: () => import('./pages/product/product.module').then(m => m.ProductModule)},
  {path: 'carrinho', loadChildren: () => import('./pages/cart/cart.module').then(m => m.CartModule)},
  {path: 'finalizar', canActivate: [AuthGuard], loadChildren: () => import('./pages/checkout/checkout.module').then(m => m.CheckoutModule)},
  {path: 'status', canActivate: [AuthGuard], loadChildren: () => import('./pages/status/status.module').then(m => m.StatusModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking',
    scrollPositionRestoration: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
