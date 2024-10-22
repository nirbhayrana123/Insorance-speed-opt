import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NavigationEnd, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { filter } from 'rxjs';
import { ConnectionService } from 'src/app/services/connection.service';
import { QuoteService } from 'src/app/services/quote.service';

@Component({
  selector: 'app-need-analysis',
  templateUrl: './need-analysis.component.html',
  styleUrls: ['./need-analysis.component.css'],
})
export class NeedAnalysisComponent implements OnInit {
  form = new FormGroup({
    debtAmt: new FormControl(0),
    anualIncm: new FormControl(0),
    noOfYears: new FormControl(0),
    finalExpense: new FormControl(0),
    amtExistingIncm: new FormControl(0),
    financialResources: new FormControl(0),
  });

  totalDebtAndFinance: number = 0;
  totalExistingIncm: number = 0;
  totalLifeInsurance: number = 0;
  totalDebt: number = 0;
  tab: number = 1;

  currentUrl: string = '';
  previousUrl: string = '';
  constructor(
    private qotSer: QuoteService,
    private toastr: ToastrService,
    private route: Router,
    private urlService: ConnectionService
  ) {}

  ngOnInit(): void {
    this.route.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        this.previousUrl = this.currentUrl;
        this.currentUrl = event.url;
        this.urlService.setPreviousUrl(this.previousUrl);
      });
  }

  calcIncome = () => {
    this.totalDebt = 0;
    if (
      this.form.controls.anualIncm.value != null &&
      this.form.controls.noOfYears.value == null
    ) {
      this.totalDebt = this.form.controls.anualIncm.value * 0;
    } else if (
      this.form.controls.noOfYears.value != null &&
      this.form.controls.anualIncm.value == null
    ) {
      this.totalDebt = 0 * this.form.controls.noOfYears.value;
    } else if (
      this.form.controls.anualIncm.value != null &&
      this.form.controls.noOfYears.value != null
    ) {
      this.totalDebt =
        this.form.controls.anualIncm.value * this.form.controls.noOfYears.value;
    }

    this.totalCalculation();
  };

  tabChange = (code: number) => {
    switch (code) {
      case 1:
        this.tab = 1;
        break;
      case 2:
        this.tab = 2;
        break;
      case 3:
        this.tab = 3;
        break;
      case 4:
        this.tab = 4;
        break;
      case 5:
        this.tab = 5;
        break;
      case 6:
        this.tab = 6;
        break;
    }
  };

  totalCalculation = () => {
    this.totalLifeInsurance = 0;
    this.totalDebtAndFinance = 0;
    this.totalExistingIncm = 0;
    if (this.form.controls.debtAmt.value != null) {
      this.totalDebtAndFinance = this.form.controls.debtAmt.value;
    }
    if (this.totalDebt != null) {
      if (this.totalDebtAndFinance != null) {
        this.totalDebtAndFinance = this.totalDebtAndFinance + this.totalDebt;
      } else {
        this.totalDebtAndFinance + 0;
      }
    }
    if (this.form.controls.finalExpense.value != null) {
      if (this.totalDebtAndFinance != null) {
        this.totalDebtAndFinance =
          this.totalDebtAndFinance + this.form.controls.finalExpense.value;
      } else {
        this.totalDebtAndFinance = 0;
      }
    }

    if (this.form.controls.amtExistingIncm.value != null) {
      if (this.totalExistingIncm != null) {
        this.totalExistingIncm =
          this.totalExistingIncm + this.form.controls.amtExistingIncm.value;
      } else {
        this.totalExistingIncm = 0;
      }
    }

    if (this.form.controls.financialResources.value != null) {
      if (this.totalExistingIncm != null) {
        this.totalExistingIncm =
          this.totalExistingIncm + this.form.controls.financialResources.value;
      } else {
        this.totalExistingIncm = 0;
      }
    }
    this.totalLifeInsurance = this.totalDebtAndFinance - this.totalExistingIncm;
  };

  save = () => {
    this.qotSer.insuranceNeeded(this.totalLifeInsurance).subscribe({
      next: (value) => {
        if (value == 200) {
          this.toastr.success('Success');
          this.route.navigate(['quoteBasicInfo']);
          localStorage.clear();
        }
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {},
    });
  };
}
