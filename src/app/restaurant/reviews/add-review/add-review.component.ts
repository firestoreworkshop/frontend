import { Component, OnInit, Input, Inject } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'shop-add-review',
  templateUrl: './add-review.component.html',
  styleUrls: ['./add-review.component.scss']
})
export class AddReviewComponent implements OnInit {

  score = 3;
  username = '';
  content = '';

  constructor(
    private firestore: AngularFirestore,
    public dialogRef: MatDialogRef<AddReviewComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {

  }

  // Task 6
  addReview() {
    this.firestore.collection<Restaurant>(
      'restaurants'
    ).doc<Restaurant>(this.data.id).collection<Review>('reviews').add({
      score: this.score,
      username: this.username,
      content: this.content
    }).then(() => {
      this.dialogRef.close();
    });
  }

}
