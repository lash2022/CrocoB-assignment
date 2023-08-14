import {inject, Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  apiUrl: string = environment.apiUrl;

  http: HttpClient = inject(HttpClient);


  get<T>(path: string, params = {}): Observable<T> {
    return this.http.get<T>(this.apiUrl + path,{
      params: params
    });
  }

  post<T>(url: string, data: any): Observable<T> {
    return this.http.post<T>(this.apiUrl + url, data);
  }

  put<T>(url: string, data: any): Observable<T> {
    return this.http.put<T>(this.apiUrl + url, data);
  }

  delete<T>(url: string): Observable<T> {
    return this.http.delete<T>(this.apiUrl + url);
  }

}
