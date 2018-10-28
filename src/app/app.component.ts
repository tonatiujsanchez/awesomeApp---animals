import { Component } from '@angular/core';
import { GetanimalsService } from './getanimals.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor( public _getAnimalesService: GetanimalsService){}
}
