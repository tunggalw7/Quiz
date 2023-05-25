import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from 'src/app/guard/auth.guard';

export const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [ 
      {
        path: '',
        component: LoginComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'login',
        component: LoginComponent,
        canActivate: [AuthGuard],
      },
      // {
      //   path: 'forgot-password',
      //   component: ForgotPassword,
      // },
      { path: '**', redirectTo: 'login' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
