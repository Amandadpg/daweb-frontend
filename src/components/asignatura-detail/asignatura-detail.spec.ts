import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignaturaDetail } from './asignatura-detail';

describe('AsignaturaDetail', () => {
  let component: AsignaturaDetail;
  let fixture: ComponentFixture<AsignaturaDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AsignaturaDetail]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsignaturaDetail);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
