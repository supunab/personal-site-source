import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router} from '@angular/router';

import {AboutComponent} from './about/about.component';
import {ExperienceComponent} from './experience/experience.component';
import {AwardsComponent} from './awards/awards.component';
import {PublicationsComponent} from './publications/publications.component';

const routes: Routes = [
  {path: 'about', component: AboutComponent},
  {path: '', redirectTo: 'about', pathMatch: 'full'},
  {path: 'experience', component: ExperienceComponent},
  {path: 'awards', component: AwardsComponent},
  {path: 'publications', component: PublicationsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
