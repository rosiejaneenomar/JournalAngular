import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HavenComponent } from './haven.component';

describe('HavenComponent', () => {
  let component: HavenComponent;
  let fixture: ComponentFixture<HavenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HavenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HavenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
