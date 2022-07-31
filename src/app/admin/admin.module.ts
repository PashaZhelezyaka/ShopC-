import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {MainLayoutComponent} from "../shared/main-layout/main-layout.component";
import { LoginPageComponent } from './login-page/login-page.component';
import { AddPageComponent } from './add-page/add-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditPageComponent } from './edit-page/edit-page.component';
import { OrdersComponent } from './orders/orders.component';
import { LoginLayoutComponent } from "../shared/login-layout/login-layout.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";



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
                        {path: 'add', component: AddPageComponent},
                        {path: 'dashboard', component: DashboardComponent},
                        {path: 'product/:id/edit', component: EditPageComponent},
                        {path: 'orders', component: OrdersComponent},
                    ]
                }
            ]
        ), ReactiveFormsModule, FormsModule]
})

export class AdminModule {


}
