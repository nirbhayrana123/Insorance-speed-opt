import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { QuoteService } from 'src/app/services/quote.service';
@Component({
  selector: 'app-insurance',
  templateUrl: './insurance.component.html',
  styleUrls: ['./insurance.component.css']
})
export class InsuranceComponent implements OnInit {

  name = 'Set iframe source';
  url: string = "https://estatenest.ca/blog/future-financial";
  urlSafe!: SafeResourceUrl;

  title = 'Insurance, Benefits, Investments, & Retirement';
  constructor(public sanitizer: DomSanitizer, private qotSer: QuoteService) { }

  ngOnInit(): void {
    this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
  }
}