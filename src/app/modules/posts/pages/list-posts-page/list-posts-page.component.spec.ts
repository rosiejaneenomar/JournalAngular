import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPostsPageComponent } from './list-posts-page.component';

describe('ListPostsPageComponent', () => {
  let component: ListPostsPageComponent;
  let fixture: ComponentFixture<ListPostsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPostsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPostsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
