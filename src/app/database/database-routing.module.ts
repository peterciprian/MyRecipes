import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DatabaseComponent } from './database.component';

const routes: Routes = [
  { path: '', component: DatabaseComponent },
  { path: 'shops', loadChildren: () => import('./shops/shops.module').then(m => m.ShopsModule) },
  { path: 'articles', loadChildren: () => import('./articles/articles.module').then(m => m.ArticlesModule) },
  { path: 'videos', loadChildren: () => import('./videos/videos.module').then(m => m.VideosModule) },
  { path: 'events', loadChildren: () => import('./events/events.module').then(m => m.EventsModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DatabaseRoutingModule { }
