import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  public registerform!: FormGroup;
  constructor(
    private FormBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {
    //form controller and fields to save
    this.registerform = this.FormBuilder.group({
      fullname: ['',Validators.required,Validators.minLength(12)],
      email: ['',Validators.required,Validators.email],
      username: ['',Validators.required],
      mobilenumber: ['',Validators.required],
      password: ['',Validators.required],
    });
  }
  register() {
    //post call to store objects in json server
    this.http
      .post<any>('http://localhost:3000/registereduser', this.registerform.value)
      .subscribe(
        (res) => {
          alert('Signup Successfull');
          this.registerform.reset();
          this.router.navigate(['login']);
        },
        (err) => alert('please enter the correct details')
      );
  }
}
