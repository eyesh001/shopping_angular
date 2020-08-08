import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';

@Component({
  selector: 'sh-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  loginStatus = '로그인';
  session$: Observable<boolean>;

  constructor(private afAuth: AngularFireAuth) { }

  doGoogleLogin(){
    this.session$.pipe(take(1)).subscribe(s => s ? this.afAuth.auth.signOut() : 
    this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider()));
  }

  ngOnInit() {
    this.session$ = this.afAuth.authState.pipe(map(user => !!user));
    this.session$.subscribe(auth => this.loginStatus = auth ? '로그아웃' : '로그인');
  }
}
