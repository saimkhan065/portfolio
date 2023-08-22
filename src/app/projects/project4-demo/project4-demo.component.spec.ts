import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Project4DemoComponent } from './project4-demo.component';

describe('Project4DemoComponent', () => {
  let component: Project4DemoComponent;
  let fixture: ComponentFixture<Project4DemoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Project4DemoComponent]
    });
    fixture = TestBed.createComponent(Project4DemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
