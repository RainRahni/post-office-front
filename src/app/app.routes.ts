import {Routes} from '@angular/router';
import {AddingPageComponent} from "./adding-page/adding-page.component";
import {HomePageComponent} from "./home-page/home-page.component";

export const routes: Routes = [
  {path: 'addData', component: AddingPageComponent },
  {path: '', component: HomePageComponent}
];
