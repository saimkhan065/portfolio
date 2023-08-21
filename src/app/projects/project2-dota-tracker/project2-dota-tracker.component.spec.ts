import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Project2DotaTrackerComponent } from './project2-dota-tracker.component';

describe('Project2DotaTrackerComponent', () => {
  let component: Project2DotaTrackerComponent;
  let fixture: ComponentFixture<Project2DotaTrackerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Project2DotaTrackerComponent]
    });
    fixture = TestBed.createComponent(Project2DotaTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
