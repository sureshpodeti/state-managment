import { BannerRequestState } from '../reducers/banner-status';
import { createSelector } from '@ngrx/store';

export interface AppState{
    bannerRequests: BannerRequestState[];
}

export const selectFeature = (state: AppState) => state.bannerRequests;

export const selectFeatureByStatus = createSelector(
    selectFeature,
    (state: BannerRequestState[]) => {
         return state.filter((banner) =>  banner.status == 'COMPLETE')
    }
);
