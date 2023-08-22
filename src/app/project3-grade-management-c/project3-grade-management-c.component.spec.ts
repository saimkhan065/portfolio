import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Project3GradeManagementCComponent } from './project3-grade-management-c.component';

describe('Project3GradeManagementCComponent', () => {
  let component: Project3GradeManagementCComponent;
  let fixture: ComponentFixture<Project3GradeManagementCComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Project3GradeManagementCComponent]
    });
    fixture = TestBed.createComponent(Project3GradeManagementCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
