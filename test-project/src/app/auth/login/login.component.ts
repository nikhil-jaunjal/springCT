import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {USER_TYPE, UserType} from "../common/UserType.model";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  loginForm: FormGroup | undefined;
  users = new UserType().getUsers();

  constructor(private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.initializeForm();
  }

  private initializeForm() {
    this.loginForm = this.formBuilder.group({
      email: [''],
      password: ['']
    });
  }

  logMeIn():void {
   const user = this.users.find(user => (user.email === this.loginForm?.value?.email && user.password === this.loginForm?.value?.password))
    if(user){
    this.checkUserAndNavigate(user);
    }
  }

  private checkUserAndNavigate(user: any):void {
    switch (user.userType) {
      case USER_TYPE.ADMIN:
        this.navigateUser(user);
        break;
      case USER_TYPE.CUSTOMER:
        this.navigateUser(user);
        break;
      case USER_TYPE.NORMAL_USER:
        this.navigateUser(user);
        break;
      default:
        this.router.navigate(['auth', 'login']);
    }
  }

  private navigateUser(user: any):void {
    this.router.navigate(['dashboard'], {
      queryParams: {user: user.userType}
    });
  }
}
