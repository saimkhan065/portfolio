import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Project1DemoComponent } from './project1-demo/project1-demo.component';
import { Project2DemoComponent } from './project2-demo/project2-demo.component';
import { Project3DemoComponent } from './project3-demo/project3-demo.component';
import { Project4DemoComponent } from './project4-demo/project4-demo.component';



@NgModule({
  declarations: [

    Project1DemoComponent,
     Project2DemoComponent,
     Project3DemoComponent,
     Project4DemoComponent
  ],
  exports: [
  ],
  imports: [
    CommonModule,

  ]
})
export class ProjectsModule { }
