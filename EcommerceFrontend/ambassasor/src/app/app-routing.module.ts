import { MainComponent } from './main/main.component';
import { BackendProductsComponent } from './main/backend-products/backend-products.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrontendProductsComponent } from './main/frontend-products/frontend-products.component';
import { SecureComponent } from './main/secure/secure.component';
import { ProfileComponent } from './main/secure/profile/profile.component';
import { RankingsComponent } from './main/secure/rankings/rankings.component';
import { StatsComponent } from './main/secure/stats/stats.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {path: '', component: FrontendProductsComponent},
      {path: 'backend', component: BackendProductsComponent},
      {
        path: '',
        component: SecureComponent,
        children: [
          {path: 'profile', component: ProfileComponent},
          {path: 'stats', component: StatsComponent},
          {path: 'rankings', component: RankingsComponent},
        ]
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
