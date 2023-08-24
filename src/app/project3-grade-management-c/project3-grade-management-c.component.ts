import { Component } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {
  Project1DemoComponent
} from "../projects/project1-demo/project1-demo.component";
import {
  Project2DemoComponent
} from "../projects/project2-demo/project2-demo.component";
import {
  Project3DemoComponent
} from "../projects/project3-demo/project3-demo.component";

@Component({
  selector: 'app-project3-grade-management-c',
  templateUrl: './project3-grade-management-c.component.html',
  styleUrls: ['./project3-grade-management-c.component.css']
})
export class Project3GradeManagementCComponent {
  constructor(private dialog: MatDialog) {}

  openQuickView(): void {

    const dialogRef = this.dialog.open(Project3DemoComponent, {
      width: '100vw',
      height: '100vh',// Adjust the width as needed
      data: {title: 'Grade Management System',
        motivation: 'A handy grade management system I use to store, manage' +
          ' my grades' +
          'and calculate term GPA ',
        videoURL: '/assets/videos/GradesManagementCDemo.mp4'
      } // You can pass any data to the modal
      // component
    });

    dialogRef.afterClosed().subscribe(result => {
      // Do something after the modal is closed if needed
    });
  }

}
