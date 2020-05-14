import axios from 'axios'
import firebaseApp from '../config/firebaseConfig'
import { 
    GETPLACES,
    LOADMARKETS,
    GETMARKETS,
    LOADPLACES,
    LOADING} from './actionTypes'
import { toast } from 'react-toastify'


/**
 * making a call to search places api
 * @param {*} places 
 */

export const getPlaces =(places)=> async dispatch=>{ 
    //showing the loading actions
    dispatch({
        type:LOADPLACES
    })
    //making axios calls to the places api
    const response = await axios({
        method:'GET',
        url:`https://api.mapbox.com/geocoding/v5/mapbox.places/${places}.json?proximity=27.8493,13.1339&access_token=pk.eyJ1IjoiYW55YXRpYnJpYW4iLCJhIjoiY2s1cGdrN3Y2MHNqbjNobW80eXF2MHAwNyJ9.3valCGJERUuqC_EqTY-E1Q`,
        responseType:'json'
    })
    dispatch({
        type:GETPLACES,
        payload:response.data.features
    })
} 

/**
 * registering the available markets
 * @param {*} data 
 */
export const submitMarkets = (data)=>dispatch=>{
    dispatch({
        type:LOADING
    })
  firebaseApp.firestore().collection("markets").add(data).then((d)=>{
      toast.success('Market created successfully',{
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
      })
    
  })
}

export const getMarkets = ()=> dispatch=>{
    dispatch({
        type:LOADMARKETS
    })
    firebaseApp.firestore().collection('markets').get().then((snapshot)=>{
        const data = []
        snapshot.forEach((markets)=>{
            data.push({
                id : markets.id,
                name:markets.data().name,
                place_name: markets.data().place_name,
                latitude:markets.data().latitude,
                longitude:markets.data().longitude
            })
            
        })
        //dispatching the various markets to the reducers
        dispatch({
            type:GETMARKETS,
            payload:data
        })
    })
}