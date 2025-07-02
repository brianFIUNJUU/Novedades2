import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViolenciaComponent } from './violencia.component';

describe('ViolenciaComponent', () => {
  let component: ViolenciaComponent;
  let fixture: ComponentFixture<ViolenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViolenciaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViolenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
