import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UrlShortnerServiceService } from '../services/url-shortner-service.service';
import { Clipboard } from '@angular/cdk/clipboard';
import { LocalStorageService } from '../services/local-storage.service';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  fullUrl = '';
  shortUrl = '';
  oldUrls: object = {};
  showOldUrls: boolean = false;

  constructor(
    private clipboard: Clipboard,
    private sanitizer: DomSanitizer,
    private service: UrlShortnerServiceService, 
    private localStorageService: LocalStorageService,
    ) { }

  ngOnInit(): void {
  }
 
  
  createShort(longUrl: string): void {

    if(longUrl == '') return
    
    this.fullUrl = longUrl;
  
    this.service.createShort(longUrl).subscribe(
      {
        next: (res) => {
          this.shortUrl = res;
          this.localStorageService.set(longUrl, this.shortUrl);
          this.oldUrls = this.localStorageService.getAll();
          if(Object.keys(this.oldUrls).length > 1) {
            this.showOldUrls = true;
          }
          
        },
        error: (error: HttpErrorResponse) => {
          alert(error.message);
        }
      }
      
    );

  }

  copyText(textToCopy: string) {
    this.clipboard.copy(textToCopy);
  }

  clearOldUrls() {
    this.localStorageService.clear();
    this.showOldUrls = false;
  }

  sanitize(url:string){
    return this.sanitizer.bypassSecurityTrustUrl(url);
}

}
