import { ActionToChangeStatus, BannerStatusActions, BannerActions } from '../actions/banner-status';

export interface BannerRequestState{
    id: number,
    name: string,
    description: string
    status: string
}


export interface AppState{
    bannerRequests: BannerRequestState[]
}

let initialState: BannerRequestState[] = []

export function BannerRequestReducer(state=initialState, action: BannerActions){
    switch(action.type){
        case BannerStatusActions.changeStatus: {
           
            let id = action.payload.id;

            let newState = [
                ...state.slice(0, id-1),
                action.payload,
                ...state.slice(id, state.length)
            ]

            return newState
        }

        case BannerStatusActions.setInitialData: {
            return  action.payload
        }

        default: {
            return state;
        }
    }
}