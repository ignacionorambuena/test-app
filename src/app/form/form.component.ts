import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  dataForm = {
    email: null,
    name: null
  }
  @Output() sendFormEmit: EventEmitter<any> = new EventEmitter();
  constructor() {
  }

  ngOnInit(): void {
  }

  sendForm() {
    this.sendFormEmit.emit(this.dataForm)
  }

}
