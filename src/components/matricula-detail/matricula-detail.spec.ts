import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatriculaDetail } from './matricula-detail';

describe('MatriculaDetail', () => {
  let component: MatriculaDetail;
  let fixture: ComponentFixture<MatriculaDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatriculaDetail]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatriculaDetail);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
