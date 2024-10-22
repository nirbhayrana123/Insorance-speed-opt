import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstateplanningComponent } from './estateplanning.component';

describe('EstateplanningComponent', () => {
  let component: EstateplanningComponent;
  let fixture: ComponentFixture<EstateplanningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstateplanningComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstateplanningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
