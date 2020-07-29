import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';

@Component({
  selector: 'sh-product-lists',
  templateUrl: './product-lists.component.html',
  styleUrls: ['./product-lists.component.css']
})

export class ProductListsComponent implements OnInit {
  loginTest = '로그인';
  session$: Observable<boolean>;

  // https://qiita.com/Yamamoto0525/items/c1ec1b7ce2350b294aeb
  constructor(private afAuth: AngularFireAuth) { }

  ngOnInit() {
    this.session$ = this.afAuth.authState.pipe(map(user => !!user));
    this.session$.subscribe(auth => this.loginTest = auth ? '로그아웃' : '로그인');
  }

  doGoogleLogin(){
    this.session$.pipe(take(1)).subscribe(s => s ? this.afAuth.auth.signOut() : 
    this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider()));
  }
}
