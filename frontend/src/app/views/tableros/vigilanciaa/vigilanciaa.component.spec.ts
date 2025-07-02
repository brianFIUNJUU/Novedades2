import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VigilanciaaComponent } from './vigilanciaa.component';

describe('VigilanciaaComponent', () => {
  let component: VigilanciaaComponent;
  let fixture: ComponentFixture<VigilanciaaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VigilanciaaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VigilanciaaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
