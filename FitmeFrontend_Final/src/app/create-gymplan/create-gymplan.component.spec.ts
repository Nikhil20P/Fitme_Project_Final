import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateGymplanComponent } from './create-gymplan.component';

describe('CreateGymplanComponent', () => {
  let component: CreateGymplanComponent;
  let fixture: ComponentFixture<CreateGymplanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateGymplanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateGymplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
