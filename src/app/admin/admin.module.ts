import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { LoginPageComponent } from './login-page/login-page.component';
import { AddPageComponent } from './add-page/add-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditPageComponent } from './edit-page/edit-page.component';
import { OrdersComponent } from './orders/orders.component';
import { LoginLayoutComponent } from "../shared/login-layout/login-layout.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AuthGuard } from "../shared/auth.guard";



@NgModule({
  declarations: [
        LoginPageComponent,
        AddPageComponent,
        DashboardComponent,
        EditPageComponent,
        OrdersComponent
  ],
    imports: [
        CommonModule, RouterModule.forChild([
                {
                    path: '', component: LoginLayoutComponent, children: [
                        {path: '', redirectTo: '/admin/login', pathMatch: 'full'},
                        {path: 'login', component: LoginPageComponent},
                        {path: 'add', component: AddPageComponent, canActivate: [AuthGuard]},
                        {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
                        {path: 'product/:id/edit', component: EditPageComponent, canActivate: [AuthGuard]},
                        {path: 'orders', component: OrdersComponent, canActivate: [AuthGuard]},
                    ]
                }
            ]
        ), ReactiveFormsModule, FormsModule]
})

export class AdminModule {


}
