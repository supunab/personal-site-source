import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router} from '@angular/router';

import {AboutComponent} from './about/about.component';
import {ExperienceComponent} from './experience/experience.component';

const routes: Routes = [
  {path: 'about', component: AboutComponent},
  {path: '', redirectTo: 'about', pathMatch: 'full'},
  {path: 'experience', component: ExperienceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
