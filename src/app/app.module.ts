import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ProjectsModule } from "./projects/projects.module";
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LandingComponent } from './landing/landing.component';
import { QuoteComponent } from './quote/quote.component';
import { SkillsComponent } from './skills/skills.component';
import {Project1ProductWorldComponent} from "./project1-product-world/project1-product-world.component";
import {Project2DotaTrackerComponent} from "./project2-dota-tracker/project2-dota-tracker.component";
import {RouterLink, Routes, RouterModule} from "@angular/router";
import {Project1DemoComponent} from "./projects/project1-demo/project1-demo.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from "@angular/material/dialog";
import { Project3GradeManagementCComponent } from './project3-grade-management-c/project3-grade-management-c.component';
import { Project4BalanceParanthesisCComponent } from './project4-balance-paranthesis-c/project4-balance-paranthesis-c.component';

// const routes: Routes = [
//   {path: '', component: AppComponent},
//   { path: 'project1-demo', component: Project1DemoComponent}
//
// ];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LandingComponent,
    QuoteComponent,
    SkillsComponent,
    Project1ProductWorldComponent,
    Project2DotaTrackerComponent,
    Project3GradeManagementCComponent,
    Project4BalanceParanthesisCComponent
  ],
  imports: [
    BrowserModule,
    ProjectsModule,
    // RouterLink,
    // RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
