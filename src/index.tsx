import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { Observable } from 'rxjs';
import { tap, map  } from 'rxjs/operators';
import Yaml from 'js-yaml';

import './index.css';
import App from './App';

import reportWebVitals from './reportWebVitals';

const convertYml = (text:string):Record<string, any>  => {
  return Yaml.load(text) as Record<string, any>;
};

const fetch = (() => {
  return new Observable<Record<string,any>> (
    (observer) => {
      const xhr = new XMLHttpRequest();
    
      xhr.ontimeout = (() => {
        console.error(`configuration download error: timeout`);
        observer.error(`timeout downloading configuration`);
      });

      xhr.onload = (() => {
        if (xhr.readyState === 4) {
          if (xhr.status == 200) {
              console.log(`data file downloaded`);
              // console.log('response: ' + xhr.responseText);
              const data:Record<string, any> = convertYml(xhr.responseText);
              observer.next(data);
          } else {
              console.error(`data file download error: ${xhr.status}`);
              observer.error(`error code: ${xhr.status}`);
          }
          observer.complete();
        }
      });

      xhr.open("GET", 'data.yml', true);
      xhr.timeout = 5000;
      xhr.send();
    }
  );
})

const state = {
  data: null
}

const initializeApp = (() => {
  fetch().toPromise().then(
    (_data:Record<string,any>|undefined) => {
      console.log(`loaded data: ${_data}`);
      if (_data != undefined) {
        const _jsonStr = JSON.stringify(_data, null, 2);
        const _jsonObj = JSON.parse(_jsonStr);
        state.data = _jsonObj;

        ReactDOM.createRoot(
          document.getElementById('root') as HTMLElement
        ).render(
          <React.StrictMode>
            <App data={state.data}/>
          </React.StrictMode>
        )
      } else {
        // Present out-of-service page
      }
    }
  );
})

initializeApp();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
