import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";

@Component({
  selector: 'app-project4-demo',
  templateUrl: './project4-demo.component.html',
  styleUrls: ['./project4-demo.component.css']
})
export class Project4DemoComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public dataProject4: any) {}
}
