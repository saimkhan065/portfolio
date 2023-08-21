import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Project1DemoComponent } from './project1-demo.component';

describe('Project1DemoComponent', () => {
  let component: Project1DemoComponent;
  let fixture: ComponentFixture<Project1DemoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Project1DemoComponent]
    });
    fixture = TestBed.createComponent(Project1DemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
