import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Project4BalanceParanthesisCComponent } from './project4-balance-paranthesis-c.component';

describe('Project4BalanceParanthesisCComponent', () => {
  let component: Project4BalanceParanthesisCComponent;
  let fixture: ComponentFixture<Project4BalanceParanthesisCComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Project4BalanceParanthesisCComponent]
    });
    fixture = TestBed.createComponent(Project4BalanceParanthesisCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
