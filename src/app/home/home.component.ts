import { Component, OnInit } from '@angular/core';
import { AngularFirestore, CollectionReference } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'shop-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  restaurants: Observable<any[]>;

  constructor(private firestore: AngularFirestore) { }

  ngOnInit() {
    this.restaurants = this.firestore.collection(
      'restaurants',
      (reference => reference)
    ).valueChanges();
  }

}
