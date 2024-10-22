import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { SafeResourceUrl } from '@angular/platform-browser';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { ToastrService } from 'ngx-toastr';
import { contactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  helpDDList: any[] = [];
  helpDDSettings: IDropdownSettings = {};

  clientType: string = 'insurance';

  constructor(private serv: contactService, private toastr: ToastrService) {}
  ngOnInit(): void {
    this.helpDDList = [
      { item_id: 1, item_text: 'Life Insurance ( Term / Permanent )' },
      { item_id: 2, item_text: 'Living Benefits ( Critical / Disability )' },
      { item_id: 3, item_text: 'Health & Dental Coverage' },
      { item_id: 4, item_text: 'Travel / Super-Visa' },
      { item_id: 5, item_text: 'Kids Education - RESP' },
      {
        item_id: 6,
        item_text: 'Registered Investment (RRSP , LIRA, LIF, RRIF)',
      },
      { item_id: 7, item_text: 'Non-Registered Account' },
      { item_id: 8, item_text: 'Tax-Free Saving Account' },
      { item_id: 9, item_text: 'Estate Planning' },
      { item_id: 10, item_text: 'Job Opportunity' },
    ];

    this.helpDDSettings = {
      idField: 'item_id',
      textField: 'item_text',
    };
  }

  name = 'Set iframe source';
  url: string = 'https://estatenest.ca/blog/contact-form/';
  urlSafe!: SafeResourceUrl;

  form = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(5)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', [Validators.required, Validators.minLength(10)]),
    subject: new FormControl('', [
      Validators.required,
      Validators.minLength(25),
    ]),
    message: new FormControl('', [
      Validators.required,
      Validators.minLength(150),
    ]),
    help: new FormControl('', [Validators.required]),
    AdviceType: new FormControl('', [Validators.required]),
    webService: new FormControl('', [Validators.required]),
  });

  get f() {
    return this.form.controls;
  }

  onSubmit = () => {
    if (!this.form.invalid) {
      this.serv.dropLine(this.form.controls).subscribe({
        next: (res: any) => {
          if (res.statusCode == 200) {
            this.toastr.success('Thank you for contacting us', 'Contact');
            this.onReset();
          }
        },
        error: () => {},
        complete: () => {},
      });
    } else {
      this.toastr.error('Form not Correctly filled', 'Countact Us');
      return;
    }
  };

  onReset = () => {
    this.form.reset();
  };

  client = () => {
    this.clientType = 'insurance';
    if (this.form.controls.AdviceType.value == 'Client') {
      this.clientType = 'web';
    }
  };
}
