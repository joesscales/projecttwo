import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, HostListener, OnInit } from '@angular/core';
import { ScreensizeService } from '../services/screensize.service';
import { SeoService } from '../services/seo.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  animations: [
    trigger('fadeInOut', [
     state('void', style({
       opacity:0
     })),
     transition('void <=> *', animate(800))
    ])
  ]
})
export class HomePage implements OnInit {

  isDesktop: boolean;
  isTop = true;
 
  constructor(private screensizeService: ScreensizeService,
    private seo: SeoService) {
    this.screensizeService.isDesktopView().subscribe(isDesktop => {
      this.isDesktop = isDesktop;
    });
  }

  onScroll(event: any) {
if (event.detail.scrollTop < 30){
this.isTop = true;
} else {
this.isTop=false;
}
 }

  ngOnInit(){

    this.seo.generateTags({title: 'Nod Caps', description:'Buy cheap caps online', image: '/assets/img/cap-image.jpg' });

     }

}
