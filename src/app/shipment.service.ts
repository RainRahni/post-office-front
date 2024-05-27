import { Shipment} from "./shipment";
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../environments/environment";

@Injectable({
  providedIn:'root'
})
export class ShipmentService {
  private apiServerUrl = environment.apiBaserUrl;
  constructor(private http: HttpClient) { }

  public getCreatedShipments(): Observable<Shipment[]> {
    return this.http.get<Shipment[]>(`${this.apiServerUrl}/api/Shipment`);
  }
}
