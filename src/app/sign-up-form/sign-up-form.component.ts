import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.css']
})
export class SignUpFormComponent implements OnInit {

  @Output() editedEmitter = new EventEmitter<boolean>();

  private form_aberto : boolean = false;
  
  constructor() { }

  functionToCall() {
    this.editedEmitter.emit(this.form_aberto);
  }

  ngOnInit(): void {
  }

}
