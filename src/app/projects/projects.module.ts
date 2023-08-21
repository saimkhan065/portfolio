import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Project1DemoComponent } from './project1-demo/project1-demo.component';



@NgModule({
  declarations: [

    Project1DemoComponent
  ],
  exports: [
  ],
  imports: [
    CommonModule,

  ]
})
export class ProjectsModule { }
