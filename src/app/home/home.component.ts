import { Component, OnInit } from '@angular/core';
import { AngularFirestore, CollectionReference, Query } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'shop-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  restaurants: Observable<Restaurant[]>;

  searchEnabled = false;
  freeDelivery = false;
  isAmerican = false;

  michelinStars = 0;
  minPrice = 0;
  maxPrice = 1000;

  constructor(private firestore: AngularFirestore) { }

  ngOnInit() {
    this.updateQuery();
  }

  // Task 4.5
  createQuery(reference: Query) {
    return reference;
  }

  // Task 3 & 4
  updateQuery() {
    // this.restaurants =
  }

}
