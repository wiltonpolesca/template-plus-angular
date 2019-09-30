import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-base-form',
  template: '<div></div>'
})
export abstract class BaseFormComponent implements OnInit {

  form: FormGroup;

  constructor() { }

  ngOnInit() {
  }

  abstract submit();

  onSubmit() {
    if (this.form.valid) {
      this.submit();
    } else {
      console.log('formulario invalido');
      this.verifyFormValidations(this.form);
    }
  }

  verifyFormValidations(formGroup: FormGroup | FormArray) {
    Object.keys(formGroup.controls).forEach(itemControl => {
      console.log(itemControl);
      const control = formGroup.get(itemControl);
      control.markAsDirty();
      control.markAsTouched();
      if (control instanceof FormGroup || control instanceof FormArray) {
        this.verifyFormValidations(control);
      }
    });
  }

  reset() {
    this.form.reset();
  }

  verifyValidTouched(control: string) {
    return (
      !this.form.get(control).valid &&
      (this.form.get(control).touched || this.form.get(control).dirty)
    );
  }

  verifyIsRequired(control: string) {
    return (
      this.form.get(control).hasError('required') &&
      (this.form.get(control).touched || this.form.get(control).dirty)
    );
  }

  verifyInvalidEmail() {
    const emailControl = this.form.get('email');
    if (emailControl.errors) {
      return emailControl.errors['email'] && emailControl.touched;
    }
  }

  apllyCssError(control: string) {
    return {
      'has-error': this.verifyValidTouched(control),
      'has-feedback': this.verifyValidTouched(control)
    };
  }
}