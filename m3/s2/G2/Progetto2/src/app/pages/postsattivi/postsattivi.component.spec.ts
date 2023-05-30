import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsattiviComponent } from './postsattivi.component';

describe('PostsattiviComponent', () => {
  let component: PostsattiviComponent;
  let fixture: ComponentFixture<PostsattiviComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostsattiviComponent]
    });
    fixture = TestBed.createComponent(PostsattiviComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
