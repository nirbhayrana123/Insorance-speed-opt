import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ToastrService } from 'ngx-toastr';
import { contactService } from 'src/app/services/contact.service';
import { contactClass } from 'src/app/classes/contactClass';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  [x: string]: any;
  name = 'Set iframe source';
  url: string = "https://estatenest.ca/blog/footer-form/";
  urlSafe!: SafeResourceUrl;
  constructor(public sanitizer: DomSanitizer, private ser: contactService, private toastr: ToastrService) { }

  form = new FormGroup({
    fName: new FormControl('', [Validators.minLength(3), Validators.required]),
    lName: new FormControl('', [Validators.minLength(3), Validators.required]),
    email: new FormControl('', [Validators.email, Validators.required]),
    phone: new FormControl('', [Validators.minLength(10), Validators.required]),
    bookingDate: new FormControl('', [Validators.required, Validators.minLength(10)]),
    bookingTime: new FormControl('', [Validators.required, Validators.minLength(5)]),
    message: new FormControl('',),
  });

  cntct = new contactClass();
  ngOnInit(): void {
    this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
  }


  get f() {
    return this.form.controls;
  }

  onSubmit = () => {
    if (!this.form.invalid) {
      this.ser.contactUs(this.form.controls).subscribe({
        next: (res) => {
          if (res.statusCode == 200) {
            this.toastr.success('Thank you for dropping us a line.', 'Drop us a line');
            this.onReset();
          }
        },
        error: (err) => {
          console.log(err)
        },
        complete: () => { }
      });
    }
    else {
      this.toastr.error('Form not correctly filled', 'Drop us a line');
      return;
    }

  }

  onReset = () => {
    this.form.reset();
  }
}
