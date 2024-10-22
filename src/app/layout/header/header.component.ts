import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @ViewChild("p") p?: ElementRef;
  constructor(private route: Router) { }

  ngOnInit(): void {

  }

  routeToCntct = () => {
    this.route.navigate(['./contact']);
  }

  whatsApp = () => {
    window.open('https://wa.me/+17808603191');
  }
}
