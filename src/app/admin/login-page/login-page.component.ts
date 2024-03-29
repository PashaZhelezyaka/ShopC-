import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { AuthService } from "../../shared/auth.service";
import { Router } from "@angular/router";
import { UserLoginAdmin } from "../../../interface/interface";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  myForm: FormGroup;
  submitted: boolean = false;

  constructor(public auth: AuthService, private rout: Router) {

    this.myForm = new FormGroup({
      email: new FormControl(null, [Validators.email, Validators.required]),
      password: new FormControl(null, [Validators.minLength(4), Validators.required])
    })
  }

  ngOnInit(): void { }

  submit() {
    if (this.myForm.invalid) return;
    this.submitted = true;

   const user: UserLoginAdmin = {
     email: this.myForm.value.email,
     password: this.myForm.value.password,
     returnSecureToken: true
   }

   this.auth.login(user).subscribe(() => {
     this.myForm.reset();
     this.rout.navigate(['/admin', 'dashboard']);
     this.submitted = false;
   },
     (error => {

       // TODO remove log
       console.log(error);

       this.submitted = false;
     })
     )
  }

}
