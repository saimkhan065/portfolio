import { Component } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {
  Project1DemoComponent
} from "../projects/project1-demo/project1-demo.component";
import {
  Project4DemoComponent
} from "../projects/project4-demo/project4-demo.component";

@Component({
  selector: 'app-project4-balance-paranthesis-c',
  templateUrl: './project4-balance-paranthesis-c.component.html',
  styleUrls: ['./project4-balance-paranthesis-c.component.css']
})
export class Project4BalanceParanthesisCComponent {
  constructor(private dialog: MatDialog) {}

  openQuickView(): void {

    const dialogRef = this.dialog.open(Project4DemoComponent, {
      width: '100vw',
      height: '100vh',// Adjust the width as needed
      data: {
        title: 'Balanced Parenthesis Check',
        motivation: 'C program that uses stack to check whether an' +
          ' expression is balanced or not. ',
        videoURL: '/assets/videos/BalancingParanthesisWithStackCDemo.mp4',
        thumbnailURL: '/assets/images/CProjectsThumbnail.png'
      } // You can pass any data to the modal
      // component
    });

    dialogRef.afterClosed().subscribe(result => {
      // Do something after the modal is closed if needed
    });
  }
}
