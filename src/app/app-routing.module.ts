import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';


const routes: Routes = [
  {
    path: "",
    redirectTo: "login",
    pathMatch: "full"
  },
  {
    path: "", component: AdminLayoutComponent, loadChildren: './layout/admin-layout/admin-layout-routing.module#AdminLayoutRoutingModule'
  },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
