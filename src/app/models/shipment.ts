import {Bag} from "./bag";

export interface Shipment {
  shipmentNumber: string;
  destinationAirport: string;
  flightNumber: string;
  flightDate: string;
  isFinalized: boolean;
  bags: Bag[];
}
