import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatedPostComponent } from './related-post.component';

describe('RelatedPostComponent', () => {
  let component: RelatedPostComponent;
  let fixture: ComponentFixture<RelatedPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RelatedPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RelatedPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
