import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlevueComponent } from './articlevue.component';

describe('ArticlevueComponent', () => {
  let component: ArticlevueComponent;
  let fixture: ComponentFixture<ArticlevueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticlevueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticlevueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
