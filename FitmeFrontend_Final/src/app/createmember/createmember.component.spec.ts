import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatememberComponent } from './createmember.component';

describe('CreatememberComponent', () => {
  let component: CreatememberComponent;
  let fixture: ComponentFixture<CreatememberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatememberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatememberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
