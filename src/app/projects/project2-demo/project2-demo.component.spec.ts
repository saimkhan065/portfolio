import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Project2DemoComponent } from './project2-demo.component';

describe('Project2DemoComponent', () => {
  let component: Project2DemoComponent;
  let fixture: ComponentFixture<Project2DemoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Project2DemoComponent]
    });
    fixture = TestBed.createComponent(Project2DemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
