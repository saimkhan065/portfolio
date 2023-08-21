import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Project1ProductWorldComponent } from './project1-product-world.component';

describe('Project1ProductWorldComponent', () => {
  let component: Project1ProductWorldComponent;
  let fixture: ComponentFixture<Project1ProductWorldComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Project1ProductWorldComponent]
    });
    fixture = TestBed.createComponent(Project1ProductWorldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
