import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DelitoComponent } from './delito.component';

describe('DelitoComponent', () => {
  let component: DelitoComponent;
  let fixture: ComponentFixture<DelitoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DelitoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DelitoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
