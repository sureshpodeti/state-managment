import { Component, OnInit, Input } from '@angular/core';
import { Banner } from 'src/app/models/banner';
import { BannersService } from 'src/app/services/banners.service';
import { Store } from '@ngrx/store';
import { BannerRequestState } from 'src/app/reducers/banner-status';
import { BannerPayload } from 'src/app/models/banner-payload';
import { ActionToChangeStatus } from 'src/app/actions/banner-status';

@Component({
  selector: 'app-request-card',
  templateUrl: './request-card.component.html',
  styleUrls: ['./request-card.component.scss']
})
export class RequestCardComponent implements OnInit {

  @Input()
  banner_req: any;

  constructor(private bannerService: BannersService, private store: Store<{bannerRequests: BannerRequestState[]}>) {
   }

  ngOnInit(): void {
  }

  changeStatus(banner: Banner, status:string){
    console.log("banner:", banner, ", status:", status);
    let bnr = {
      ...banner,
      status: status
    }

    this.store.dispatch(new ActionToChangeStatus(bnr));
  }

}
