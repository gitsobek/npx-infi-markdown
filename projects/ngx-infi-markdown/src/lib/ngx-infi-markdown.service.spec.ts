import { TestBed } from '@angular/core/testing';

import { NgxInfiMarkdownService } from './ngx-infi-markdown.service';

describe('NgxInfiMarkdownService', () => {
  let service: NgxInfiMarkdownService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxInfiMarkdownService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
