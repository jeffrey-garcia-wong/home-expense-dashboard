import * as yaml from 'js-yaml';
import { Observable } from 'rxjs';
import { tap, map  } from 'rxjs/operators';

export const convertYml = (text:string):Record<string, any>  => {
    return yaml.load(text) as Record<string, any>;
};
  
const fetchData = ((dataFilePath:string) => {
    return new Observable<Record<string,any>> (
        (observer:any) => {
            const xhr = new XMLHttpRequest();
        
            xhr.ontimeout = (() => {
                console.error(`data file download timeout`);
                observer.error(`timeout`);
            });
    
            xhr.onload = (() => {
                if (xhr.readyState === 4) {
                    if (xhr.status == 200) {
                        // console.log('response: ' + xhr.responseText);
                        const data:Record<string, any> = convertYml(xhr.responseText);
                        const jsonStr = JSON.stringify(data);
                        if ((typeof JSON.parse(jsonStr)) === "object") {
                            console.log(`data file downloaded`);
                            observer.next(data);
                        } else {
                            observer.error(`data file invalid/corrupted`);
                        }
                    } else {
                        observer.error(`data file download error: ${xhr.status}`);
                    }
                    observer.complete();
                }
            });
    
            xhr.open("GET", dataFilePath, true);
            xhr.timeout = 5000;
            xhr.send();
        }
    );
});

const dataSource = (() => {
    let _dataJsonStr:string;
    return {
        init: (data:Record<string,any>) => {
            _dataJsonStr = JSON.stringify(data, null, 2);
        },
        get: () => {
            return JSON.parse(_dataJsonStr);
        }
    }
})();

export const DataSource = dataSource;

const dataSourceLoader = (() => {
    return fetchData('data.yml').pipe(
        tap(
            (data:Record<string,any>) => {
                dataSource.init(data);
                console.log(`data source loaded`);
                return true;
            },
            (error:any) => {
                console.error(`data source loading error: ${error}`);
                return true;
            }
        ),
        map(() => {
            return true;
        })
    );
  })();

export const DataSourceLoader:Observable<any> = dataSourceLoader;