import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';

// import { NotFoundComponent } from 'src/app/core/not-found/not-found.component';
// import { externalUrlProvider } from 'src/app/core';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule) },
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  { path: 'maintenance', loadChildren: () => import('./maintenance/maintenance.module').then(m => m.MaintenanceModule) },
  { path: 'profile', loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule) },
  { path: 'recipes', loadChildren: () => import('./recipes/recipes.module').then(m => m.RecipesModule) },
  { path: 'seasonal', loadChildren: () => import('./seasonal/seasonal.module').then(m => m.SeasonalModule) },
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
  { path: 'register', loadChildren: () => import('./register/register.module').then(m => m.RegisterModule) },
  { path: 'database', loadChildren: () => import('./database/database.module').then(m => m.DatabaseModule) },
  { path: '**', component: NotFoundComponent },
  // {
  //  path: 'externalRedirect',
  //  resolve: {
  //    url: externalUrlProvider,
  //  },
  // We need a component here because we cannot define the route otherwise
  //  component: NotFoundComponent,
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
