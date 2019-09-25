import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiPlayerRoomComponent } from './multi-player-room.component';

describe('MultiPlayerRoomComponent', () => {
  let component: MultiPlayerRoomComponent;
  let fixture: ComponentFixture<MultiPlayerRoomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultiPlayerRoomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiPlayerRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
