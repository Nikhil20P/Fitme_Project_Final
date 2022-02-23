import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GymplanListComponent } from './gymplan-list.component';

describe('GymplanListComponent', () => {
  let component: GymplanListComponent;
  let fixture: ComponentFixture<GymplanListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GymplanListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GymplanListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
