import { Component } from '@angular/core';
import { Navbar } from 'src/app/models/navbar';
import { NavbarService } from 'src/app/services/navbar.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
 navbar:Navbar[]=[];
 constructor(private navservice:NavbarService){}
 ngOnInit(){
  this.navservice.getdata().subscribe(data=>this.navbar=data);
 }
}


