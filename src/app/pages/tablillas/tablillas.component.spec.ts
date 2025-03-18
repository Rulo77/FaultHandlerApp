import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablillasComponent } from './tablillas.component';

describe('TablillasComponent', () => {
  let component: TablillasComponent;
  let fixture: ComponentFixture<TablillasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TablillasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablillasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
