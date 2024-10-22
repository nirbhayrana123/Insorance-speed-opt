import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Title, Meta } from '@angular/platform-browser';
import * as AOS from 'aos';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title = 'Insurance, Benefits, Investments, & Retirement';
  bannerImage: string = 'assets/images/estate-planning-text.png';
  bannerTitle: string = 'Insurance, Benefits, Investments, & Retirement';
  bannerImage2: string = 'assets/images/image-3.png';

 constructor(private titleService: Title, private metaService: Meta) {}

  ngOnInit(): void {
    AOS.init();
    this.titleService.setTitle(this.title);
    this.metaService.addTags([
      {name: 'keywords', content: ''},
      {name: 'description', content: ''},
      {name: 'robots', content: 'index, follow'}
    ]);



  }
    
 
  customOptions: OwlOptions = {
    loop: true,
    items: 1,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
   
    nav: true
  }
}
