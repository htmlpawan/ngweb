import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReportsComponent } from './reports/reports.component';
import { TestComponent } from './test/test.component';
import { LoginComponent } from './login/login.component';
import { FormReactComponent } from './form-react/form-react.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
    component: FormReactComponent
  },
  {
    path: 'reports',
    component: ReportsComponent,
  },
  {
      path: 'login',
      component: LoginComponent,
  },
  {
    path: 'test',
    component: TestComponent,
  },
  {
    path: 'form',
    component: FormReactComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
