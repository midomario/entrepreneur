import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.page.html',
  styleUrls: ['./articles.page.scss'],
})
export class ArticlesPage implements OnInit {

  segment = "mycategories";  

  constructor() { }

  segmentChanged(ev: any) {
    console.log('Segment changed', ev);
  }
  ngOnInit() {
  }

}
