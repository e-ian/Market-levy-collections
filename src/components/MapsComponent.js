import React,{ useRef, useEffect} from 'react'
import { Grid } from 'semantic-ui-react'
import mapboxgl from 'mapbox-gl'
import firebaseApp from '../config/firebaseConfig'
import {generateMarker} from '../utils/mapsHelpers'

export default function MapsComponent(){
    const maps = useRef()
    const renderMaps = () => {
        const mapContainer = maps.current
        mapboxgl.accessToken = 'pk.eyJ1IjoiYW55YXRpYnJpYW4iLCJhIjoiY2s1cGdrN3Y2MHNqbjNobW80eXF2MHAwNyJ9.3valCGJERUuqC_EqTY-E1Q'
        const map = new mapboxgl.Map({
            container:mapContainer,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [28.322301,-15.387192],
            zoom: 10
        })
        //marker generators
        firebaseApp.firestore().collection('market-stalls').get().then((snapshot)=>{
            snapshot.forEach((docs)=>{
                const popups  =  new mapboxgl.Popup({ offset: 25 })
                .setHTML('<h3>' +docs.data().locations + '</h3><p> this market has alot of several venders</p>')
                generateMarker(map,[parseFloat(docs.data().latitude), parseFloat(docs.data().longitude)], popups)
            })
         })
    }
    useEffect(()=>{
        renderMaps()
    },[])
    return (
        <div>
            <Grid>
            <Grid.Row>
            <Grid.Column width="16">
            <div ref={maps} className="maps"></div>
            </Grid.Column>
            </Grid.Row>
            </Grid>
        </div>
    )
}
