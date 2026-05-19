import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnoDetail } from './alumno-detail';

describe('AlumnoDetail', () => {
  let component: AlumnoDetail;
  let fixture: ComponentFixture<AlumnoDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlumnoDetail]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlumnoDetail);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
