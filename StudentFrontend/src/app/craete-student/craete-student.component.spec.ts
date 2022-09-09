import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CraeteStudentComponent } from './craete-student.component';

describe('CraeteStudentComponent', () => {
  let component: CraeteStudentComponent;
  let fixture: ComponentFixture<CraeteStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CraeteStudentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CraeteStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
