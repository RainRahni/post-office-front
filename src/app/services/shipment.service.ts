import { Shipment} from "../models/shipment";
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
  public createShipment(data: any): Observable<any> {
    return this.http.post(`${this.apiServerUrl}/api/Shipment/Initial`, data);
  }

  public finalizeShipment(shipmentNumber: string): Observable<any> {
    return this.http.post(`${this.apiServerUrl}/api/Shipment/Final?shipmentNumber=${shipmentNumber}`, {});
  }
}
