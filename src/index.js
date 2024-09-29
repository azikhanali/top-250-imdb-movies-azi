import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/general.css';
import './style/solid.css';
import './style/fontawesome.css'
import Router from './components/router';
import { Card, ConfigProvider, Pagination } from 'antd';
import LayOut from './components/layOut';
//import App from './App';
//import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<ConfigProvider   theme={{
    components: {
        Pagination: {
        colorPrimary:"green",
        itemActiveBg:"#0101",
        itemSizeSM:5,
      } },
    token:{
        colorText:"#fff",
        fontSize:10,
    }
  }}>
    <Router/>
</ConfigProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
