import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AboutUsComponent} from './about-us/about-us.component'
import { ContactUsComponent} from './contact-us/contact-us.component'
import { DashboardpayComponent } from './dashboardpay/dashboardpay.component';
import { BillingComponent } from './billing/billing.component';
import { SuccessfullComponent } from './successfull/successfull.component';
const routes: Routes = [
  {path:'', redirectTo:'login', pathMatch:'full'},
  {path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent},
  {path:'dashboard', component:DashboardComponent},
  {path:'about-us', component:AboutUsComponent},
  {path:'contact-us', component:ContactUsComponent},
  {path:'dashboardpay',component:DashboardpayComponent},
  {path:'billing',component:BillingComponent},
  {path: 'successfull',component:SuccessfullComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
