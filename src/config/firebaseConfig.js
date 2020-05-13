import * as firebase from 'firebase'
// firebase configurations from the firestore
const  firebaseConfig = {
    apiKey: "AIzaSyAAYTg8BlUe_7A7nLrUFeOSDFu2B0wlC_k",
    authDomain: "market-levy.firebaseapp.com",
    databaseURL: "https://market-levy.firebaseio.com",
    projectId: "market-levy",
    storageBucket: "market-levy.appspot.com",
    messagingSenderId: "271979897541",
    appId: "1:271979897541:web:99e1a3397539e4e486c6ac",
    measurementId: "G-7B2FHXCH6F"
    }
    
//intializing the firebase into the appplication
const firebaseApp = firebase.initializeApp(firebaseConfig)
firebaseApp.firestore().settings({})
export default firebaseApp