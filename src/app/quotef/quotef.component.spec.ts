import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuotefComponent } from './quotef.component';

describe('QuotefComponent', () => {
  let component: QuotefComponent;
  let fixture: ComponentFixture<QuotefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuotefComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuotefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
