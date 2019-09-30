import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { BaseFormComponent } from 'src/app/components/base-form/base-form.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent extends BaseFormComponent implements OnInit {

  educations: FormArray;
  experiences: FormArray;

  constructor(private formBuilder: FormBuilder,
  ) {
    super();
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      name: [null, [Validators.required]],
      password: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
      document: [null, [Validators.required]],
      phone: [null, [Validators.required]],
      educations: this.formBuilder.array([this.createEducation()]),
      experiences: this.formBuilder.array([this.createExperience()]),

    });

  }

  createEducation(): FormGroup {
    return this.formBuilder.group({
      school: '',
      degree: '',
      startYear: 0,
      endYear: 0
    });
  }

  addEducation() {
    this.educations = this.form.get('educations') as FormArray;
    this.educations.push(this.createEducation());
  }

  removeEducation() {
    this.educations = this.form.get('educations') as FormArray;
    this.educations.removeAt(this.educations.length - 1);
  }

  createExperience(): FormGroup {
    return this.formBuilder.group({
      company: '',
      title: '',
      startDate: undefined,
      endDate: undefined,
      description: ''
    });
  }

  addExperience() {
    this.experiences = this.form.get('experiences') as FormArray;
    this.experiences.push(this.createExperience());
  }
  removeExperience() {
    this.experiences = this.form.get('experiences') as FormArray;
    this.experiences.removeAt(this.experiences.length - 1);
  }

  submit() {
    console.table(this.form.value);
    console.table(this.form.errors);

    /*
let valueSubmit = Object.assign({}, this.formulario.value);

    valueSubmit = Object.assign(valueSubmit, {
      frameworks: valueSubmit.frameworks
      .map((v, i) => v ? this.frameworks[i] : null)
      .filter(v => v !== null)
    });

    console.log(valueSubmit);

    this.http
        .post('https://httpbin.org/post', JSON.stringify({}))
        .subscribe(
          dados => {
            console.log(dados);
            // reseta o form
            // this.formulario.reset();
            // this.resetar();
          },
          (error: any) => alert('erro')
        );
    */
  }

}
