import {Component, OnInit} from '@angular/core';
import {NgForOf, NgIf} from "@angular/common";
import {Shipment} from "../shipment";
import {ShipmentService} from "../shipment.service";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-home-page',
  standalone: true,
    imports: [
        NgForOf,
        NgIf
    ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent implements OnInit{
  public shipments: Shipment[] | undefined;
  public selectedShipment: Shipment | undefined;
  constructor(private shipmentService: ShipmentService) { }
  ngOnInit() {
    this.getCreatedShipments();
  }

  public getCreatedShipments(): void {
    this.shipmentService.getCreatedShipments().subscribe(
      (response: Shipment[]) => {
        this.shipments = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
  title = 'post-office-front';
}
