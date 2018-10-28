import { Component, OnInit } from '@angular/core';
import { GetanimalsService } from '../getanimals.service';

@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.css']
})
export class AnimalsComponent implements OnInit {
  name = "name_test";

  animales:any=[];

  constructor( public _getAnimalesService: GetanimalsService) { }

  ngOnInit() {

    this.animales = this._getAnimalesService.animales;

  }

}
