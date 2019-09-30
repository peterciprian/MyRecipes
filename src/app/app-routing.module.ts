import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import { NotFoundComponent } from 'src/app/core/not-found/not-found.component';
// import { externalUrlProvider } from 'src/app/core';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'about', loadChildren: './about#AboutModule' },
  { path: 'home', loadChildren: './home#HomeModule' },
  { path: 'maintenance', loadChildren: './maintenance#MaintenanceModule' },
  { path: 'profile', loadChildren: './profile#ProfileModule' },
  { path: 'recipes', loadChildren: './recipes#RecipesModule' },
  { path: 'seasonal', loadChildren: './seasonal#SeasonalModule' },
  { path: 'shops', loadChildren: './shops#ShopsModule' },
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
