import { Component } from '@angular/core';
import { Banner } from 'src/app/models/banner';
import { BannerService } from 'src/app/services/banner.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  banner:Banner[]=[];
  constructor(private service:BannerService) { }
  ngOnInit(){
    this.service.getdata().subscribe(data=>this.banner=data);
  }

}
