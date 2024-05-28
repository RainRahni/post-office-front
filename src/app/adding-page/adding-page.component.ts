import { Component } from '@angular/core';
import {Shipment} from "../shipment";
import {ShipmentService} from "../shipment.service";
import {HttpErrorResponse} from "@angular/common/http";
import {catchError} from "rxjs";

@Component({
  selector: 'app-adding-page',
  standalone: true,
  imports: [],
  templateUrl: './adding-page.component.html',
  styleUrl: './adding-page.component.css'
})
export class AddingPageComponent {
  constructor(private shipmentService: ShipmentService) { }

  public onSubmit(formIndex: number): void {
    let inputs = document.querySelectorAll('.forms')[formIndex].querySelectorAll('input');
    let data: { [key: string]: any } = {};
    inputs.forEach(input => {
      let key = input.getAttribute('data-key');
      if (key) {
        data[key] = input.value;
      }
    });

    switch(formIndex) {
      case 0:
        this.shipmentService.createShipment(data).pipe(
          catchError(error => {
            console.error(error);
            alert('Error: ' + error.error);
            throw error;
          })
        ).subscribe(response => {
          console.log(response);
          alert('Success: Shipment processed successfully!');
        });
        break;
      case 4:
        this.shipmentService.finalizeShipment(data['Shipment number']).pipe(
          catchError(error => {
            console.error(error);
            alert('Error: ' + error.error);
            throw error; // rethrow the error
          })
        ).subscribe(response => {
          console.log(response);
          alert('Success: Shipment finalized successfully!');
        });
        break;
      default:
        console.error('Invalid form index');
    }
  }

}
