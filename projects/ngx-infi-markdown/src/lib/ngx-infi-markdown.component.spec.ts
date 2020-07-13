import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxInfiMarkdownComponent } from './ngx-infi-markdown.component';

describe('NgxInfiMarkdownComponent', () => {
  let component: NgxInfiMarkdownComponent;
  let fixture: ComponentFixture<NgxInfiMarkdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NgxInfiMarkdownComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxInfiMarkdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
