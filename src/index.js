import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import RoutingComponent from './components/RoutingComponent'
<<<<<<< HEAD
=======
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
>>>>>>> 8cbef0c8499b5e60ead15b47821f5effc42e5753
import './index.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <RoutingComponent/>
<<<<<<< HEAD
=======
      <ToastContainer />
>>>>>>> 8cbef0c8499b5e60ead15b47821f5effc42e5753
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
