import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AuthService } from 'src/app/core/services/auth.service';
import { AuthProvider, User, AuthOptions } from 'src/app/core/services/auth.types';
import { AngularFireAuth } from '@angular/fire/auth';



@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  authState$: any;

  constructor(
    private authService: AuthService,
    private afAuth: AngularFireAuth,
    public navCtrl: NavController
  ) {
    this.authState$ = this.afAuth.authState;
  }

  ngOnInit() {
  }


  match() {
    this.navCtrl.navigateForward('/match');
  }

  logout() {
    return this.afAuth.auth.signOut(),
    this.navCtrl.navigateForward('/login');
  }

}
