import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'button-bar',
  templateUrl: './button-bar.component.html',
  styleUrls: ['./button-bar.component.css']
})
export class ButtonBarComponent implements OnInit {

  @Output() emitterFormOpen = new EventEmitter<boolean>();
  
  private variableToPass : boolean = true;

  constructor() { }

  functionToCall() {
    this.emitterFormOpen.emit(this.variableToPass);
  }

  ngOnInit(): void {
  }

}
