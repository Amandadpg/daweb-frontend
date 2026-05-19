import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatriculasAprobadas } from './matriculas-aprobadas';

describe('MatriculasAprobadas', () => {
  let component: MatriculasAprobadas;
  let fixture: ComponentFixture<MatriculasAprobadas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatriculasAprobadas]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatriculasAprobadas);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
