import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { NavController } from 'ionic-angular';

import { Company } from '../../models/company';
/**
 * shows and validates a form used to create a new company
 */
@Component({
  selector: 'create-company',
  templateUrl: 'create-company.html'
})
export class CreateCompanyPage {
  company = new Company("",undefined,"");
  submitted = false;

  constructor(
    public navCtrl: NavController,
  ) {}

  onSubmit(form: NgForm) {
    this.submitted = true;

    if (form.valid) {
      //TODO: send company to server
      this.navCtrl.pop();
    }
  }
}
