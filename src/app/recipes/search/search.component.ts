import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { SearchOptionsService } from './search-options.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

  protected month: string;
  protected months: Array<string>;

  protected ingredent: Array<string>;
  protected ingredents: Array<string>;

  protected type: Array<string>;
  protected types: Array<string>;

  protected lacking: Array<string>;
  protected lackings: Array<string>;

  protected temperature: Array<string>;
  protected temperatures: Array<string>;
  protected preserved: boolean;

  constructor(options: SearchOptionsService) {
    this.months = options.months;
    this.month = options.months[new Date(Date.now()).getMonth()];
    this.ingredents = options.ingredents;
    this.types = options.types;
    this.lackings = options.lackings;
    this.temperatures = options.temperatures;
    this.preserved = false;
  }

  ngOnInit() {
    console.log(this.month);
  }
  find() {
    console.log(`hónap: ${this.month}`);
    console.log(`típus: ${this.type}`);
    console.log(`mentesség: ${this.lacking}`);
    console.log(`elkészítés: ${this.temperature}`);
    console.log(`tartósított: ${this.preserved}`);
  }
  /*ingredentSearch = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(term => term.length < 2 ? []
        : ingredents.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
    )
  monthSearch = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(term => term.length < 2 ? []
        : months.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
    )
  typeSearch = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(term => term.length < 2 ? []
        : type.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
    )
  lackingSearch = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(term => term.length < 2 ? []
        : lacking.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
    )
  temperatureSearch = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(term => term.length < 2 ? []
        : temperature.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
    )

    */
}
