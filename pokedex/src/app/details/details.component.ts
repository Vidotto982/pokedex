import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pokemon } from "../models/pokemon";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
   @Input() pokemon: Pokemon | undefined;



  constructor() { }

  ngOnInit(): void {

  }
}
