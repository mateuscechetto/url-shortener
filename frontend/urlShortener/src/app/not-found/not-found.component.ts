import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {

  shortUrl = '';
  subscription!: Subscription;

  constructor(private route: ActivatedRoute ) { }

  ngOnInit(): void {
    this.subscription = this.route.params.subscribe(
      (params) => {
        this.shortUrl = params['shorturl'];
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  

}
