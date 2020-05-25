import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {rootReducer} from '../reducer/rootReducer'

const middleWare = [thunk]
const initialState = {}

//creating stores for various actions
export const store = createStore(rootReducer, initialState, applyMiddleware(...middleWare))
