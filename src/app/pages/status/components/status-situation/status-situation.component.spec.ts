import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusSituationComponent } from './status-situation.component';

describe('StatusSituationComponent', () => {
  let component: StatusSituationComponent;
  let fixture: ComponentFixture<StatusSituationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatusSituationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatusSituationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
