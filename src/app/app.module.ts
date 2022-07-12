import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule,FormControl,FormGroup,Validators} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule}  from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { BillingComponent } from './billing/billing.component';
import { DashboardpayComponent } from './dashboardpay/dashboardpay.component';
import { SuccessfullComponent } from './successfull/successfull.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    ContactUsComponent,
    AboutUsComponent,
    BillingComponent,
    DashboardpayComponent,
    SuccessfullComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
