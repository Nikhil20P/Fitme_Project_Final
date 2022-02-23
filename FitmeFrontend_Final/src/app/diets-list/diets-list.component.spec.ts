import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DietsListComponent } from './diets-list.component';

describe('DietsListComponent', () => {
  let component: DietsListComponent;
  let fixture: ComponentFixture<DietsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DietsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DietsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
