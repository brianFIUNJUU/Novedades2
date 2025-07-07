import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartesDiariosListComponent } from './partes-diarios-list.component';

describe('PartesDiariosListComponent', () => {
  let component: PartesDiariosListComponent;
  let fixture: ComponentFixture<PartesDiariosListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PartesDiariosListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartesDiariosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
