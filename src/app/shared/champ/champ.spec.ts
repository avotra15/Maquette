import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Champ } from './champ';

describe('Champ', () => {
  let component: Champ;
  let fixture: ComponentFixture<Champ>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Champ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Champ);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
