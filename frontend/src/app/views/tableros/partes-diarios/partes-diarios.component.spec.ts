import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartesDiariosComponent } from './partes-diarios.component';

describe('PartesDiariosComponent', () => {
  let component: PartesDiariosComponent;
  let fixture: ComponentFixture<PartesDiariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PartesDiariosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartesDiariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
