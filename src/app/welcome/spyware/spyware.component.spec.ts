import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpywareComponent } from './spyware.component';

describe('SpywareComponent', () => {
  let component: SpywareComponent;
  let fixture: ComponentFixture<SpywareComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpywareComponent]
    });
    fixture = TestBed.createComponent(SpywareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
