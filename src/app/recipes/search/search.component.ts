import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { SearchOptionsService } from './search-options.service';
import { CrudService } from 'src/app/shared/crud.service';
import { Recipe } from '../recipe';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

  public recipes: Array<Recipe>;

  public month: string;
  public months: Array<string>;

  public ingredent: Array<string>;
  public ingredents: Array<string>;

  public type: Array<string>;
  public types: Array<string>;

  public lacking: Array<string>;
  public lackings: Array<string>;

  public temperature: Array<string>;
  public temperatures: Array<string>;
  public preserved: boolean;

  private noData = false;            // Showing No Student Message, when no student in database.
  private preLoader = true;          // Showing Preloader to show user data is coming for you from thre server(A tiny UX Shit)
  private hideWhenNoRecipe = false;

  constructor(private options: SearchOptionsService, private crudService: CrudService) {
    this.months = options.months;
    this.month = options.months[new Date(Date.now()).getMonth()];
    this.ingredents = options.ingredents;
    this.types = options.types;
    this.lackings = options.lackings;
    this.temperatures = options.temperatures;
    this.preserved = false;
  }

  ngOnInit() {
    this.dataState(); // Initialize recipe's list, when component is ready
    const s = this.crudService.getRecipesList();
    s.snapshotChanges().subscribe(data => { // Using snapshotChanges() method to retrieve list of data along with metadata($key)
      this.recipes = new Array<Recipe>();
      data.forEach(item => {
        const a = item.payload.toJSON();
        // tslint:disable-next-line:no-string-literal
        a['$key'] = item.key;
        this.recipes.push(a as Recipe);
      });
    });
  }

  // Using valueChanges() method to fetch simple list of recipes data.
  // It updates the state of hideWhenNoRecipe, noData & preLoader variables when any changes occurs in recipe data list in real-time.
  dataState() {
    this.crudService.getRecipesList().valueChanges().subscribe(data => {
      this.preLoader = false;
      if (data.length <= 0) {
        this.hideWhenNoRecipe = false;
        this.noData = true;
      } else {
        this.hideWhenNoRecipe = true;
        this.noData = false;
      }
    });
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
