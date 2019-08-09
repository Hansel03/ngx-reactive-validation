import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ReactiveValidation } from "../validators/reactive-validation";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ngx-reactive-validation';

  public formLogin: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private _reactiveValidation: ReactiveValidation
  ) {

  }

  ngOnInit() {
    this.createFormLogin();
  }


  private createFormLogin() {

    this.formLogin = this.formBuilder.group({
      'channel': [null, Validators.required],
      'tipoDocumento': [null, Validators.required],
      'usuario': [null, Validators.required],
      'password': [null, Validators.required],
      'transactionId': [null, Validators.required],
      'sessionId': [null, Validators.required]
    });
  }


  public submitForm(form: FormGroup) {
    if (form.valid) {
      debugger;
    } else {
      this._reactiveValidation.validateAllFormFields(form);
    }

  }



}
