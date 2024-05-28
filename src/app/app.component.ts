import {Component, NgModule, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Shipment} from "./shipment";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {ShipmentService} from "./shipment.service";
import {CommonModule} from "@angular/common";
import {NavbarComponent} from "./navbar/navbar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
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
