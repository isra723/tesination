import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
@Output() selectOpt = new EventEmitter<string>();

  constructor() { }

  selectAppOpt(option: string) {
    this.selectOpt.emit(option);
  }

  ngOnInit(): void {
  }
}
