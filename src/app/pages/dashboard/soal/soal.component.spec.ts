import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoalComponent } from './soal.component';

describe('SoalComponent', () => {
  let component: SoalComponent;
  let fixture: ComponentFixture<SoalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SoalComponent]
    });
    fixture = TestBed.createComponent(SoalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
