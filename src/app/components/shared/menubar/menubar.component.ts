import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.scss']
})
export class MenubarComponent implements OnInit {
@Output() selectOpt = new EventEmitter<string>();

  constructor() { }

  selectAppOpt(option: string) {
    this.selectOpt.emit(option);
  }

  ngOnInit(): void {
  }
}
