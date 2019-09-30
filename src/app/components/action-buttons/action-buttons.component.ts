import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'action-buttons',
  templateUrl: './action-buttons.component.html',
  styleUrls: ['./action-buttons.component.scss']
})
export class ActionButtonsComponent implements OnInit {

  @Input() addLabel: string;
  @Input() addEnabled: boolean = true;
  @Input() removeLabel: string;
  @Input() deleteEnabled: boolean = true;

  @Output() onAddClick = new EventEmitter();
  @Output() onDeleteClick = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  addClick() {
    console.log("add click");
    this.onAddClick.emit();
  }

  deleteClick() {
    this.onDeleteClick.emit();
  }

}
