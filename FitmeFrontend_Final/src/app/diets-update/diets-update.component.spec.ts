import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DietsUpdateComponent } from './diets-update.component';

describe('DietsUpdateComponent', () => {
  let component: DietsUpdateComponent;
  let fixture: ComponentFixture<DietsUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DietsUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DietsUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
