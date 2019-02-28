import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'shop-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.scss']
})
export class RestaurantComponent implements OnInit {

  id = '';

  restaurant: Observable<Restaurant>;

  constructor(private firestore: AngularFirestore, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    if (!this.id) {
      // no id, goto home
      this.router.navigate(['/']);
      return;
    }

    this.loadRestaurant();

  }

  loadRestaurant() {
    this.restaurant = this.firestore.collection<Restaurant>(
      'restaurants'
    ).doc<Restaurant>(this.id).valueChanges();
  }
  /* Below are helper functions */

  private mapStream(stream) {
    return stream.map(document => {
      const data = document.payload.doc.data() as Restaurant;
      const id = document.payload.doc.id;
      return { id, ...data };
    });
  }

}
