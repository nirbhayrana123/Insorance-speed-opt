import { Interpolation } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { QuoteService } from 'src/app/services/quote.service';

@Component({
  selector: 'app-quote-basic-info',
  templateUrl: './quote-basic-info.component.html',
  styleUrls: ['./quote-basic-info.component.css'],
  providers: [NgbModalConfig, NgbModal]
})
export class QuoteBasicInfoComponent implements OnInit {

  form = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', [Validators.required, Validators.minLength(10)]),
    gender: new FormControl('', [Validators.required]),
    dob: new FormControl('', [Validators.required]),
    smoker: new FormControl('', [Validators.required]),
    state: new FormControl('', [Validators.required]),
    cov: new FormControl('', [Validators.required]),
    resStatus: new FormControl('', [Validators.required]),
  });

  calTyp = "";
  public step2: boolean = false;
  constructor(private toastr: ToastrService, private qotSer: QuoteService,
    private config: NgbModalConfig, private modalService: NgbModal,
    private rout: Router, private spnr: NgxSpinnerService) {
    config.backdrop = 'static';
    config.keyboard = false;
    config.backdrop = false;
  }

  ngOnInit(): void {
  }

  get f() {
    return this.form.controls;
  }

  onSubmit() {
    if (!this.form.invalid) {
      this.spnr.show();
      this.qotSer.basicInfo(this.form.controls).subscribe({
        next: (value) => {
          if (value.statusCode == 200) {
            this.spnr.hide();
            localStorage.setItem("basicInfoId", value.object['id'])
            this.step2 = true;
          }
        },
        error: (err) => {
          console.log(err)
        },
        complete: () => {

        },
      });
    }
    else {
      this.toastr.error('The Form is incomplete or not filled', 'Basic Info');
    }
  }

  open(content: any, typ: any) {
    this.modalService.open(content);

    this.calTyp = typ;
  }

  disclaimer = (Disclaimer: string) => {
    this.qotSer.disclaimer(Disclaimer).subscribe({
      next: (value) => {
        if (value.statusCode == 200) {
          if (this.calTyp == "cal") {
            this.rout.navigate(['quote/calculator']);
          }
          else {
            this.rout.navigate(['health-profile']);
          }
        }
      },
      error: (err) => {

      },
      complete: () => {

      }

    });
  }

}

