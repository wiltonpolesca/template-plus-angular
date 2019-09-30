import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'form-box',
  templateUrl: './form-box.component.html',
  styleUrls: ['./form-box.component.scss']
})
export class FormBoxComponent implements OnInit {

  @Input() title: string;
  @Input() icon: string;
  @Input() subTitle: string;
  
  
  constructor() { }

  ngOnInit() {
  }

}
