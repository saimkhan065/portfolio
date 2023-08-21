import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project1ProductWorldComponent } from './project1-product-world/project1-product-world.component';
import { Project2DotaTrackerComponent } from './project2-dota-tracker/project2-dota-tracker.component';



@NgModule({
  declarations: [
    Project1ProductWorldComponent,
    Project2DotaTrackerComponent
  ],
  exports: [
    Project1ProductWorldComponent,
    Project2DotaTrackerComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProjectsModule { }
