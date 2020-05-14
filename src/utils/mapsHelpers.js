import React from 'react'
import ReactDOMServer from 'react-dom/server';
import mapboxgl from 'mapbox-gl'

/**
 * 
 * @param {*} map 
 */
export const generateMarker = (map,data, popups) => {
    let el = document.createElement('div')
    el.innerHTML = ReactDOMServer.renderToStaticMarkup(<div className="venderMaker"/>)
    new mapboxgl.Marker(el)
    .setLngLat(data)
    .setPopup(popups)
    .addTo(map)
}