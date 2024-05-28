import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../environments/environment";

@Injectable({
  providedIn:'root'
})
export class BagService {
  private apiServerUrl = environment.apiBaserUrl;
  constructor(private http: HttpClient) { }
  public createBag(data: any): Observable<any> {
    return this.http.post(`${this.apiServerUrl}/api/Bag`, data);
  }
  public createParcel(data: any): Observable<any> {
    return this.http.post(`${this.apiServerUrl}/api/Parcel`, data);
  }
  public addLetters(data: any): Observable<any> {
    return this.http.post(`${this.apiServerUrl}/api/Bag/Letters`, data);
  }
}
