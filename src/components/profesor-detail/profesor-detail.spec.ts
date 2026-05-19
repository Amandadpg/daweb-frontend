import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfesorDetail } from './profesor-detail';

describe('ProfesorDetail', () => {
  let component: ProfesorDetail;
  let fixture: ComponentFixture<ProfesorDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfesorDetail]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfesorDetail);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
