import { Component , ViewChild} from '@angular/core';
import { SwiperComponent } from "swiper/angular";
import SwiperCore, { Autoplay, Keyboard, Pagination, Scrollbar, Zoom } from 'swiper';
SwiperCore.use([Autoplay, Keyboard, Pagination, Scrollbar, Zoom]);
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  @ViewChild('swiper') swiper : SwiperComponent;
  constructor() {}

  ngAfterContentChecked() {
    if(this.swiper){
      this.swiper.updateSwiper({});
    }
  }
}
