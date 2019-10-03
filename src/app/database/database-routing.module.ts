import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DatabaseComponent } from './database.component';

const routes: Routes = [
  { path: '', component: DatabaseComponent },
  { path: 'shops', loadChildren: './shops/shops.module#ShopsModule' },
  { path: 'articles', loadChildren: './articles/articles.module#ArticlesModule' },
  { path: 'videos', loadChildren: './videos/videos.module#VideosModule' },
  { path: 'events', loadChildren: './events/events.module#EventsModule' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DatabaseRoutingModule { }
