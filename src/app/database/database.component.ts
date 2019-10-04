import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-database',
  templateUrl: './database.component.html',
  styles: []
})
export class DatabaseComponent implements OnInit {
  private typeName: string;
  constructor() {
    this.typeName = this.getName();
  }

  ngOnInit() {
  }

  getName() {
    return this.constructor.name;
  }
}
