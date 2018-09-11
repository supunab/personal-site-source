import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AboutComponent } from './about/about.component';
import { AppRoutingModule } from './/app-routing.module';
import { ExperienceComponent } from './experience/experience.component';
import { AwardsComponent } from './awards/awards.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    AboutComponent,
    ExperienceComponent,
    AwardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
