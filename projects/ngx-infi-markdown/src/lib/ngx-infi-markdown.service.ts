import { Injectable } from '@angular/core';
import { TreeService } from './_core/services/tree.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NgxInfiMarkdownService {
  constructor(private treeService: TreeService) {}

  html$(): Observable<string> {
    return this.treeService.contentOb$;
  }

  getHtml(): string {
    return this.treeService.buildView();
  }
}
