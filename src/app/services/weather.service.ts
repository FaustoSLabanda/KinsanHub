import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private url = 'https://s3.eu-west-2.amazonaws.com/interview-question-data/metoffice/';
  constructor(public http: HttpClient) { }

  public getWeathers(metric: string, location: string): Observable<any> {
    const url = `${this.url}${metric}-${location}.json`;
    return this.http.get(url)
      .pipe(
        map(this.responseServices),
      // catchError()
    );
  }


  public responseServices(res: any) {
    if (res.type !== 0) {
        return res || {};
    } else {
        return {};
    }
}
}
