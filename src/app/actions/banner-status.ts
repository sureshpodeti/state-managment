import {Action} from '@ngrx/store'
import { Banner } from '../models/banner';
import { BannerPayload } from '../models/banner-payload';

export enum BannerStatusActions {
    changeStatus = '[BannerStatus Component] action to change banner status',
    initialDataLoad = '[BannerStatus Component] initial data  loading',
    setInitialData = '[BannerStatus Component] set initial data'
}

export class ActionToChangeStatus implements Action{
    readonly type = BannerStatusActions.changeStatus;

    constructor(public payload: Banner){}
}


export class IntialDataLoadAction implements Action{
    readonly type = BannerStatusActions.initialDataLoad
}

export class SetInitialData implements Action{
    readonly type = BannerStatusActions.setInitialData

    constructor(public payload: Banner[]){}
}

export type BannerActions = ActionToChangeStatus | IntialDataLoadAction | SetInitialData