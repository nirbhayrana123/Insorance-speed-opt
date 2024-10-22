import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import * as AOS from 'aos';

@Component({
  selector: 'app-estateplanning',
  templateUrl: './estateplanning.component.html',
  styleUrls: ['./estateplanning.component.css']
})
export class EstateplanningComponent implements OnInit {
  
  title = 'Insurance, Benefits, Investments, & Retirement';

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

}
