import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DietsCalcultorComponent } from './diets-calcultor.component';

describe('DietsCalcultorComponent', () => {
  let component: DietsCalcultorComponent;
  let fixture: ComponentFixture<DietsCalcultorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DietsCalcultorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DietsCalcultorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
