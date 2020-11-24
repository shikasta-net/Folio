import { ComponentFixture, TestBed } from '@angular/core/testing';

import ChaseComponent from './chase.component';

describe('CanvasComponent', () => {
  let component: ChaseComponent;
  let fixture: ComponentFixture<ChaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChaseComponent],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
