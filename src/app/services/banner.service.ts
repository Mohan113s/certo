import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Banner } from '../models/banner';

@Injectable({
  providedIn: 'root'
})
export class BannerService {

  private baseurl = "https://sheetdb.io/api/v1/vm75zixe6du8k";

  constructor(private http:HttpClient) { }
  getdata():Observable<Banner[]>{
    return this.http.get<Banner[]>(this.baseurl);
  }
}
