import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistribucionlistComponent } from './distribucionlist.component';

describe('DistribucionlistComponent', () => {
  let component: DistribucionlistComponent;
  let fixture: ComponentFixture<DistribucionlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DistribucionlistComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DistribucionlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
