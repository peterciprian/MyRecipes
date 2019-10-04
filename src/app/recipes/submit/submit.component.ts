import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { SearchOptionsService } from '../search/search-options.service';
import { Ingredent, Recipe } from '../recipe';

@Component({
  selector: 'app-submit',
  templateUrl: './submit.component.html',
  styles: []
})
export class SubmitComponent implements OnInit {

  protected newRecipe: Recipe;

  protected newIngredent: Ingredent;

  protected months: string[];
  protected month: string;
  protected ingredentList: string[];
  protected typeList: string[];
  protected lackingList: string[];
  protected temperatureList: string[];

  constructor(options: SearchOptionsService) {
    this.months = options.months;
    this.month = options.months[new Date(Date.now()).getMonth()];
    this.ingredentList = options.ingredents.sort();
    this.typeList = options.types.sort();
    this.lackingList = options.lackings.sort();
    this.temperatureList = options.temperatures.sort();
    this.newRecipe = new Recipe();
    this.newIngredent = new Ingredent();
  }

  ngOnInit() {
  }

  ingredentSearch = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(term => term.length < 2 ? []
        : this.ingredentList.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
    )
  add() {
    this.newRecipe.ingredents.push(this.newIngredent);
    console.log(this.newRecipe.ingredents);
    this.newIngredent = new Ingredent();
  }
  remove(item) {
    for (let i = this.newRecipe.ingredents.length - 1; i >= 0; i--) {
      if (this.newRecipe.ingredents[i] === item) {
        this.newRecipe.ingredents.splice(i, 1);
      }
    }
  }
  submit() {
    this.newRecipe.id = Math.floor(Math.random() * 1000000001);
    this.newRecipe.created = new Date(Date.now());
    this.newRecipe.uploader = 'default user';
    console.log(this.newRecipe);
    this.newRecipe = new Recipe();
  }
}
