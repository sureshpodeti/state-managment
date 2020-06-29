import { Component, OnInit } from '@angular/core';
import { BannersService } from 'src/app/services/banners.service';
import { Banner } from 'src/app/models/banner';
import { Store, select } from '@ngrx/store';
import { BannerRequestState, AppState } from 'src/app/reducers/banner-status';
import { Observable } from 'rxjs';
import { IntialDataLoadAction } from 'src/app/actions/banner-status';
import { selectFeatureByStatus } from 'src/app/selectors/banner.selectors';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

bannerRequests: Observable<BannerRequestState[]>;

constructor(private store: Store<AppState>) {
    // this.bannerRequests = store.pipe(select('bannerRequests'));

    this.bannerRequests = store.pipe(select(selectFeatureByStatus))
 }
  ngOnInit(): void {
    //   this.bannersService.getBannerRequests().subscribe(
    //       next => {
    //           this.banner_requests = next;
    //       },
    //       error => {
    //           console.log("Error in getting list of banner requests");
    //       }
    //   );
    this.store.dispatch(new IntialDataLoadAction());
  }

}
