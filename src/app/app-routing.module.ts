import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ServicesComponent } from './services/services.component';
import { HomeComponent } from './home/home.component';
import { OurteamComponent } from './ourteam/ourteam.component';
import { FaqComponent } from './faq/faq.component';

const routes: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'home', component: HomeComponent},
    { path: 'services', component: ServicesComponent }, 
    { path: 'ourteam', component: OurteamComponent},
    { path: 'faq', component: FaqComponent}, 
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
