import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Project3DemoComponent } from './project3-demo.component';

describe('Project3DemoComponent', () => {
  let component: Project3DemoComponent;
  let fixture: ComponentFixture<Project3DemoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Project3DemoComponent]
    });
    fixture = TestBed.createComponent(Project3DemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
