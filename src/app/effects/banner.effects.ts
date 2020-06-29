import { Injectable } from '@angular/core';
import { BannersService } from '../services/banners.service';
import { Observable } from 'rxjs';
import { Action } from '@ngrx/store';
import {Actions, Effect, ofType} from '@ngrx/effects';
import { BannerStatusActions, IntialDataLoadAction, SetInitialData, ActionToChangeStatus } from '../actions/banner-status';
import {switchMap, map, catchError, flatMap, mergeMap, concatMap, exhaustMap} from 'rxjs/operators'

@Injectable()
export class BannerEffects {

    constructor(private bannerService: BannersService, private actions: Actions){}

    @Effect()
    IntialDataLoadAction: Observable<Action> = this.actions.pipe(
        ofType(BannerStatusActions.initialDataLoad),
        switchMap(() => {
            return this.bannerService.getBannerRequests().pipe(
                map(data => new SetInitialData(data))
            )
        })
    );

    @Effect()
    ActionToChangeStatus: Observable<Action> = this.actions.pipe(
        ofType<ActionToChangeStatus>(BannerStatusActions.changeStatus),
        exhaustMap((action) => {
            return this.bannerService.updateBannerRequestStatus(action.payload).pipe(
                map(data => new ActionToChangeStatus(data))
            )
        })
    )

    


}
