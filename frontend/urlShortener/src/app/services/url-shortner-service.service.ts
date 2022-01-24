import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { UrlDto } from '../model/urlDto';

@Injectable({
  providedIn: 'root'
})
export class UrlShortnerServiceService {


  constructor(private http: HttpClient) { }

  public createShort(fullUrl:string) {
    let urlDto: UrlDto = {
      url: fullUrl
    }
    return this.http.post(`${environment.apiServerUrl}`, urlDto, {responseType: 'text'});
  }

  public redirect(shortUrl: string) {
    this.http.get(`${environment.apiServerUrl}/${shortUrl}`);
  }


}
