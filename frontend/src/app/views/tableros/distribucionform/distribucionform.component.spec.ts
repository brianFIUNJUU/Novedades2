import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistribucionformComponent } from './distribucionform.component';

describe('DistribucionformComponent', () => {
  let component: DistribucionformComponent;
  let fixture: ComponentFixture<DistribucionformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DistribucionformComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DistribucionformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
