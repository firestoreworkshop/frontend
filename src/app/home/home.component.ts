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
    if (!this.searchEnabled) {
      return reference = reference.orderBy('averagePrice', 'asc');
    }

    if (this.freeDelivery) {
      reference = reference.where('freeDelivery', '==', this.freeDelivery);
    }
    if (this.isAmerican) {
      reference = reference.where('isAmerican', '==', this.isAmerican);
    }

    reference = reference
      .where('averagePrice', '>=', this.minPrice)
      .where('averagePrice', '<=', this.maxPrice)
      .orderBy('averagePrice', 'asc');
    return reference;
  }

  // Task 3 & 4
  updateQuery() {
    this.restaurants = this.firestore.collection<Restaurant>(
      'restaurants',
      (reference => this.createQuery(reference))
    ).snapshotChanges().pipe(map(stream => this.mapStream(stream)));
  }

  /* Below are A helper function (For getting document ID) */
  private mapStream(stream) {
    return stream.map(document => {
      const data = document.payload.doc.data() as Restaurant;
      const id = document.payload.doc.id;
      return { id, ...data };
    });
  }

}
