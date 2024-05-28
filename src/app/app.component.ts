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
export class AppComponent{
}
