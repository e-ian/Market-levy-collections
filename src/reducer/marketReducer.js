import {GETPLACES, LOADING,GETMARKETS,LOADMARKETS} from '../actions/actionTypes'

const initialState = {
    markets: [],
    loading:false,
    marketPlaces: [],
    loadMarkets:false
}

/**
 * the market reducer
 * @param {*} state 
 * @param {*} action 
 */
export const getMarketPlaces = (state=initialState, action) =>{
    switch(action.type){
        case GETPLACES:
            return {
                ...state, markets:action.payload,
                loading:false
            }
        case LOADING:
            return {
                ...state, loading:true
            }
        case GETMARKETS:
            return{
                ...state,
                marketPlaces: action.payload,
                loadMarkets:false
  
            }
        case LOADMARKETS:
            return{
                ...state,
                loadMarkets:true
            }
        default:
            return state
    }

}