import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsnonattiviComponent } from './postsnonattivi.component';

describe('PostsnonattiviComponent', () => {
  let component: PostsnonattiviComponent;
  let fixture: ComponentFixture<PostsnonattiviComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostsnonattiviComponent]
    });
    fixture = TestBed.createComponent(PostsnonattiviComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
