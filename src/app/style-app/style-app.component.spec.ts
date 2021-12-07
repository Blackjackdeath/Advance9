import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StyleAppComponent } from './style-app.component';

describe('StyleAppComponent', () => {
  let component: StyleAppComponent;
  let fixture: ComponentFixture<StyleAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StyleAppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StyleAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
