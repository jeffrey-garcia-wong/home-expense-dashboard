import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';
import { DataSourceLoader, DataSource } from './service/ConfigService';
import reportWebVitals from './reportWebVitals';

const initializeApp = (() => {
  DataSourceLoader.toPromise().then(
    (dataLoaded:boolean) => {
      console.log(`loaded data: ${dataLoaded}`);
      ReactDOM.createRoot(
        document.getElementById('root') as HTMLElement
      ).render(
        <React.StrictMode>
          <App data={DataSource.get()}/>
        </React.StrictMode>
      )
    }
  ).catch(
    (error:any) => {
      console.error(`site cannot be loaded.`);
      // present custom error page
    }
  );;
})

initializeApp();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
