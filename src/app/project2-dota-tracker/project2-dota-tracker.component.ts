import { Component } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {
  Project1DemoComponent
} from "../projects/project1-demo/project1-demo.component";
import {
  Project2DemoComponent
} from "../projects/project2-demo/project2-demo.component";

@Component({
  selector: 'app-project2-dota-tracker',
  templateUrl: './project2-dota-tracker.component.html',
  styleUrls: ['./project2-dota-tracker.component.css']
})
export class Project2DotaTrackerComponent {
  constructor(private dialog: MatDialog) {}

  openQuickView(): void {

    const dialogRef = this.dialog.open(Project2DemoComponent, {
      width: '100vw',
      height: '100vh',// Adjust the width as needed
      data: {title: 'Dota 2 Tracker',
        motivation: 'JavaFX GUI App Tracker which I used to track my' +
          ' performance in Dota 2 games.',
        videoURL: 'assets/videos/Dota2TrackerDemo.mp4'
      } // You can pass any data to the modal
      // component
    });

    dialogRef.afterClosed().subscribe(result => {
      // Do something after the modal is closed if needed
    });
  }

}
