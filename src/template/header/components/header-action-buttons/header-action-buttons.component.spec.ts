import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderActionButtonsComponent } from './header-action-buttons.component';

describe('HeaderActionButtonsComponent', () => {
  let component: HeaderActionButtonsComponent;
  let fixture: ComponentFixture<HeaderActionButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderActionButtonsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderActionButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
