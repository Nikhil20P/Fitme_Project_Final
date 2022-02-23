import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GymplanUpdateComponent } from './gymplan-update.component';

describe('GymplanUpdateComponent', () => {
  let component: GymplanUpdateComponent;
  let fixture: ComponentFixture<GymplanUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GymplanUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GymplanUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
