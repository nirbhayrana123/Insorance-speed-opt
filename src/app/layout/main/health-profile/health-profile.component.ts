import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { QuoteService } from 'src/app/services/quote.service';

@Component({
  selector: 'app-health-profile',
  templateUrl: './health-profile.component.html',
  styleUrls: ['./health-profile.component.css']
})
export class HealthProfileComponent implements OnInit {

  form = new FormGroup({
    heitFt: new FormControl('', [Validators.required]),
    heitInc: new FormControl('', [Validators.required]),
    weight: new FormControl('', [Validators.required]),
    weitMsr: new FormControl('', [Validators.required]),
    tobaccoUseType: new FormControl('', [Validators.required]),
    bp: new FormControl('', [Validators.required]),
    cholestrol: new FormControl('', [Validators.required]),
    drivinglicense: new FormControl('', [Validators.required]),
    preMedCond: new FormControl('', [Validators.required]),

  });

  dropdownList: any[] = [];
  dropdownSettings: IDropdownSettings = {};
  constructor(private http: HttpClient, private qotSer: QuoteService, private route: Router) { }

  ngOnInit(): void {

    this.dropdownList = [
      { item_id: 1, item_text: 'Cigarettes' },
      { item_id: 2, item_text: 'Cigars' },
      { item_id: 3, item_text: 'Pipes' },
      { item_id: 4, item_text: 'Chewing Tobacco' },
      { item_id: 5, item_text: 'Nicotine patch/gum' },
      { item_id: 6, item_text: 'Not Used' }
    ];

    this.dropdownSettings = {
      idField: 'item_id',
      textField: 'item_text',
    };
  }

  get f() {
    return this.form.controls;
  }

  onSubmit() {
    this.qotSer.medCondition(this.form.controls).subscribe({
      next: (value) => {
        if (value = 200) {
          this.form.reset();
          this.route.navigate(['quote/insuranceAssesment']);
        }
      },
      error: (err) => {

      },
      complete: () => {

      },
    });
  }
}
