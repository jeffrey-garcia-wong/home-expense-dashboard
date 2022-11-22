import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';
import SorryPage from './view/pages/exception/SorryPage';
import { DataSourceLoader, DataSource } from './service/DataService';
import reportWebVitals from './reportWebVitals';

const initializeApp = (() => {
  DataSourceLoader.toPromise().then(
    () => {
      ReactDOM.createRoot(
        document.getElementById('root') as HTMLElement
      ).render(
        <React.StrictMode>
          <App data={DataSource.get()}/>
        </React.StrictMode>
      );
    }
  ).catch(
    (error:any) => {
      console.error(`site cannot be loaded. ${error}`);
      // present custom error page
      ReactDOM.createRoot(
        document.getElementById('root') as HTMLElement
      ).render(
        <React.StrictMode>
          <SorryPage />
        </React.StrictMode>
      )      
    }
  );
})

initializeApp();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
