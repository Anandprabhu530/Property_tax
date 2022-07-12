import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FormGroup,FormControl,FormBuilder,Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  public contactform!: FormGroup;
  constructor(
    private FormBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {
    //form controller and fields to save
    this.contactform = this.FormBuilder.group({
      firstname: ['',Validators.required,Validators.minLength(5)],
      lastname: ['',Validators.required,Validators],
      subject: ['',Validators.required]
    });
  }
  contactus() {
    //post call to store objects in json server
    this.http
      .post<any>('http://localhost:3000/Contact-Us', this.contactform.value)
      .subscribe(
        (res) => {
          alert('Submission Successfull');
          this.contactform.reset();
          this.router.navigate(['dashboard']);
        },
        (err) => alert('please fill all details.')
      );
  }
}

