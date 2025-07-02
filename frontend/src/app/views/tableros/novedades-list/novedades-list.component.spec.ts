import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovedadesListComponent } from './novedades-list.component';

describe('NovedadesListComponent', () => {
  let component: NovedadesListComponent;
  let fixture: ComponentFixture<NovedadesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NovedadesListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NovedadesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
