import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  userExists: boolean= false;
  successMsg: boolean= false;

  constructor(
    private userService : UserService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  register({form, value, valid}) {
    console.log(value);
    if(valid) {
      this.userService.register(value).subscribe(res => {
        if(res == 'userExists') {
          this.userExists = true;
          setTimeout(function() {
            this.userExists = false;
          }.bind(this),2000);
        } else {
          form.reset();
          this.successMsg = true;
          setTimeout(function() {
            this.successMsg = false;
          }.bind(this),2000);
        }
      });
    }
  }
}
