import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginFailed: boolean= false;
  constructor(
    private userService : UserService,
    private router: Router
  ) { }

  ngOnInit() {
    if (localStorage.getItem("user")) this.router.navigateByUrl('');
  }

  login({value, valid}) {
    if(valid) {
      this.userService.login(value).subscribe(res => {
        if(res == 'invalidLogin') {
          this.loginFailed = true;
          setTimeout(function() {
            this.userExists = false;
          }.bind(this),2000);
        } else {
          localStorage.setItem("user", JSON.stringify(res));
          this.router.navigateByUrl('');
        }
      });
    }
  }
}
