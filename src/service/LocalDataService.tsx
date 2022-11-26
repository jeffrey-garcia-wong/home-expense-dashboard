import { Observable } from "rxjs";
import MockData from "./MockData";

const dataSource = (() => {
  let _dataJsonStr: string;
  return {
    init: (data: Record<string, any>) => {
      _dataJsonStr = JSON.stringify(data, null, 2);
    },
    get: () => JSON.parse(_dataJsonStr),
  };
})();

export const DataSource = dataSource;

const dataSourceLoader = (() => {
  return new Observable<void>((observer: any) => {
    const data: any[] = MockData.create();
    dataSource.init(data);
    observer.next();
    observer.complete();
  });
})();

export const DataSourceLoader: Observable<void> = dataSourceLoader;
