import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';



@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  afAuth: any;

  constructor(
    public navCtrl: NavController
  ) {}

  ngOnInit() {
  }


  match() {
    this.navCtrl.navigateForward('/match');
  }

}
