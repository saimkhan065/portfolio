import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";

@Component({
  selector: 'app-project2-demo',
  templateUrl: './project2-demo.component.html',
  styleUrls: ['./project2-demo.component.css']
})
export class Project2DemoComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public dataProject2: any) {}
}
