import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Banner } from '../models/banner';

@Injectable({
  providedIn: 'root'
})
export class BannersService {

  banners_url = 'http://localhost:3000/banner_requests'

  constructor(private http: HttpClient) { }


  getBannerRequests():Observable<Banner[]>{
    return this.http.get<Banner[]>(this.banners_url);
  }

  updateBannerRequestStatus(banner: Banner):Observable<Banner>{
    return this.http.put<Banner>(this.banners_url+'/'+banner.id, banner);
  }

  
}
