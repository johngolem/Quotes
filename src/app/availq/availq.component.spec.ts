import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailqComponent } from './availq.component';

describe('AvailqComponent', () => {
  let component: AvailqComponent;
  let fixture: ComponentFixture<AvailqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvailqComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AvailqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
