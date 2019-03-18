import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'shop-restaurant-card',
  templateUrl: './restaurant-card.component.html',
  styleUrls: ['./restaurant-card.component.scss']
})
export class RestaurantCardComponent implements OnInit {

  @Input() restaurant: Restaurant;

  constructor() { }

  ngOnInit() {
  }

}
