import {Component, Inject} from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";

@Component({
  selector: 'app-project1-demo',
  templateUrl: './project1-demo.component.html',
  styleUrls: ['./project1-demo.component.css']
})
export class Project1DemoComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}
