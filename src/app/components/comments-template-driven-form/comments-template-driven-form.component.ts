import { Component } from '@angular/core';

class Info {
  constructor(public email: string, public phone: string, public url: string) { }
}

@Component({
  selector: 'app-comments-template-driven-form',
  templateUrl: './comments-template-driven-form.component.html',
  styleUrls: ['./comments-template-driven-form.component.scss']
})
export class CommentsTemplateDrivenFormComponent {

  public info = new Info('','','');

}
