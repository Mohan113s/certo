import { Component } from '@angular/core';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  login:any;
  constructor(private service: LoginService) { }
  ngOnInit(): void {
    this.service.getdata().subscribe(data=>this.login=data);
  }

}
