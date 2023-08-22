import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";

@Component({
  selector: 'app-project3-demo',
  templateUrl: './project3-demo.component.html',
  styleUrls: ['./project3-demo.component.css']
})
export class Project3DemoComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public dataProject3: any) {}
}
