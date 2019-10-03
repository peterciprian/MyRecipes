import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import { NotFoundComponent } from 'src/app/core/not-found/not-found.component';
// import { externalUrlProvider } from 'src/app/core';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'about', loadChildren: './about/about.module#AboutModule' },
  { path: 'home', loadChildren: './home/home.module#HomeModule' },
  { path: 'maintenance', loadChildren: './maintenance/maintenance.module#MaintenanceModule' },
  { path: 'profile', loadChildren: './profile/profile.module#ProfileModule' },
  { path: 'recipes', loadChildren: './recipes/recipes.module#RecipesModule' },
  { path: 'seasonal', loadChildren: './seasonal/seasonal.module#SeasonalModule' },
  { path: 'login', loadChildren: './login/login.module#LoginModule' },
  { path: 'register', loadChildren: './register/register.module#RegisterModule' },
  { path: 'database', loadChildren: './database/database.module#DatabaseModule' },
  // { path: '**', component: NotFoundComponent },
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
