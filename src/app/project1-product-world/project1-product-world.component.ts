import { Component } from '@angular/core';
import { Project1DemoComponent } from "../projects/project1-demo/project1-demo.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-project1-product-world',
  templateUrl: './project1-product-world.component.html',
  styleUrls: ['./project1-product-world.component.css']
})


export class Project1ProductWorldComponent {
  constructor(private dialog: MatDialog) {}

  openQuickView(): void {

    const dialogRef = this.dialog.open(Project1DemoComponent, {
      width: '100vw',
      height: '100vh',// Adjust the width as needed
      data: {title: 'ProductWorld',
        motivation: 'WPF App that connects to a Product Database and' +
          ' provides GUI based functionalities to user.',
        videoURL: '/assets/videos/ProductWorldDemo.mp4',
        description: 'WPF app with MVVM architecture, front end written using ' +
          'XAML and c# code behind. App connects to a local products database' +
          'and allows user CRUD operations on the database with a GUI' +
          ' interface.'
      } // You can pass any data to the modal
      // component
    });

    dialogRef.afterClosed().subscribe(result => {
      // Do something after the modal is closed if needed
    });
  }

}
