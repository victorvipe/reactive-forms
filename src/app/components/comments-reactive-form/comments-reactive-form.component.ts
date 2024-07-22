import { Component } from '@angular/core';
import { AbstractControl, UntypedFormBuilder } from '@angular/forms';
import { emailValidator } from 'systelab-components';

@Component({
  selector: 'app-comments-reactive-form',
  templateUrl: './comments-reactive-form.component.html',
  styleUrls: ['./comments-reactive-form.component.scss']
})
export class CommentsReactiveFormComponent {

  inputValidationForm = this.formBuilder.group({
    email :['', emailValidator],
    /*phone :['', phoneValidator],
    url :['', urlValidator],*/

  });

  constructor(private formBuilder: UntypedFormBuilder) { }

  get email(): AbstractControl | null {
    return this.inputValidationForm.get('email');
  }



}
