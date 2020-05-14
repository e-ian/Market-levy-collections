import { combineReducers} from 'redux'
import {authReducer} from './authReducer'
import {getMarketPlaces} from './marketReducer'

//combines all the available reducers 
export const rootReducer = combineReducers({
    auth:authReducer,
    getMarkets:getMarketPlaces
})