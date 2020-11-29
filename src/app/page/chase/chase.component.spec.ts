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

  const boundParameters: {
    message: string,
    input: [number, number, number],
    expected: number
  }[] = [
    {
      message: 'Middle of bounds',
      input: [50, 0, 100],
      expected: 50,
    },
    {
      message: 'Upper bounds',
      input: [100, 0, 100],
      expected: 100,
    },
    {
      message: 'Lower bounds',
      input: [0, 0, 100],
      expected: 0,
    },
    {
      message: 'Below lower bounds',
      input: [-20, 0, 100],
      expected: 0,
    },
    {
      message: 'Above uppper bounds',
      input: [200, 0, 100],
      expected: 100,
    },
  ];

  boundParameters.forEach(({ message, input, expected }) => {
    it(message, () => {
      expect(ChaseComponent.bound(...input)).toBe(expected);
    });
  });
});
