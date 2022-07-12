import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public display !:FormGroup 
  constructor(private formbuilder: FormBuilder,private http : HttpClient, private router : Router) { }

  ngOnInit(): void {
  this.display=this.formbuilder.group({
    Propertyid:['',Validators.required]
  })
}
displayitems(){
  this.http.get<any>("http://localhost:3000/property-id")
  .subscribe(res => {
    const user = res.find((a:any)=>{
      return a.Propertyid === this.display.value.Propertyid
    });
    if(user){
      alert("Pay your tax nearby");
      this.display.reset();
      this.router.navigate(['dashboardpay']);
    }else{
      alert("Please enter correct Property ID");
      this.display.reset();
      this.router.navigate(['dashboard']);
    }
  },err =>{
    alert("404-Error")
  })
}
}


