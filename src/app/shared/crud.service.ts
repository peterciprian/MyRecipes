import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';
import { Recipe } from '../recipes/recipe';


@Injectable({
  providedIn: 'root'
})
export class CrudService {
  recipesRef: AngularFireList<Recipe>;
  recipeRef: AngularFireObject<Recipe>;

  constructor(private db: AngularFireDatabase) { }

  // Create Recipe
  addRecipe(recipe: Recipe) {
    this.recipesRef.push({
      id: recipe.id,
      name: recipe.name,
      ingredents: recipe.ingredents,
      preparation: recipe.preparation,
      uploader: recipe.uploader,
      type: recipe.type,
      lackings: recipe.lackings,
      temperature: recipe.temperature,
      month: recipe.month,
      preserved: recipe.preserved,
      created: recipe.created,
      updated: recipe.updated,
      rating: recipe.rating,
      active: recipe.active,
      inspected: recipe.inspected,
      valid: recipe.valid
    });
  }

  // Fetch Single Recipe Object
  getRecipe(id: string) {
    this.recipeRef = this.db.object('recipes-list/' + id);
    return this.recipeRef;
  }

  // Fetch Recipes List
  getRecipesList() {
    this.recipesRef = this.db.list('recipes-list');
    return this.recipesRef;
  }

  // Update Recipe Object
  updateRecipe(recipe: Recipe) {
    this.recipeRef.update({
      id: recipe.id,
      name: recipe.name,
      ingredents: recipe.ingredents,
      preparation: recipe.preparation,
      uploader: recipe.uploader,
      type: recipe.type,
      lackings: recipe.lackings,
      temperature: recipe.temperature,
      month: recipe.month,
      preserved: recipe.preserved,
      created: recipe.created,
      updated: recipe.updated,
      rating: recipe.rating,
      active: recipe.active,
      inspected: recipe.inspected,
      valid: recipe.valid
    });
  }

  // Delete Recipe Object
  deleteRecipe(id: string) {
    this.recipeRef = this.db.object('recipes-list/' + id);
    this.recipeRef.remove();
  }

}
