import { Injectable } from '@angular/core';
import { TreeService } from './_core/services/tree.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NgxInfiMarkdownService {
  constructor(private treeService: TreeService) {}

  /**
   * Returns observable of currently created content
   *
   * @return {Observable} content observable
   */
  html$(): Observable<string> {
    return this.treeService.contentOb$;
  }

  /**
   * Returns currently created content synchronously
   *
   * @return {string} content
   */
  getHtml(): string {
    return this.treeService.buildView();
  }
}
