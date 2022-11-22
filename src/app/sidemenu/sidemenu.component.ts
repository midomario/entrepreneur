import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss'],
})
export class SidemenuComponent implements OnInit {




    appPages = [
        {
            title: 'Home',
            url: '/home/landing',
            icon: '🏠'
        },
        {
            title: 'My Profile',
            url: '/profile',
            icon: '👤'
        },
        {
            title: 'Switch City',
            url: '/settings/set-location',
            icon: '🏙'
	},
        {
            title: "Promotions",
            url: "/promotions",
            icon: "💸"
        }
    ];

constructor(private menu: MenuController) {

}


    ngOnInit() { }

    hideMe() {
        this.menu.close();
     }

}
