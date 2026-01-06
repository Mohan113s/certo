import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AndriodUsersComponent } from './andriod-users.component';

describe('AndriodUsersComponent', () => {
  let component: AndriodUsersComponent;
  let fixture: ComponentFixture<AndriodUsersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AndriodUsersComponent]
    });
    fixture = TestBed.createComponent(AndriodUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
