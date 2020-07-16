import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Entity } from '../models/Entity';
import { Payload } from '../models/Payload';
import { distinctUntilChanged } from 'rxjs/operators';
import { Tag } from '../models/Tag';

export const defaultStyles: { [key: string]: any } = {
  'header-lg': {
    htmlTag: 'h1',
    styles: {
      'font-size': '22px',
      'font-weight': '800',
    },
  },
  'header-md': {
    htmlTag: 'h3',
    styles: {},
  },
  paragraph: {
    htmlTag: 'p',
    styles: {},
  },
};

@Injectable({
  providedIn: 'root',
})
export class TreeService {
  private content$: BehaviorSubject<string> = new BehaviorSubject<string>('');
  contentOb$: Observable<string> = this.content$.asObservable().pipe(distinctUntilChanged());

  private entityTree: Entity[] = [];

  constructor() {}

  getEntityRow(key: number): Entity | null {
    const singleRow = this.entityTree[key - 1];

    if (!singleRow) {
      return null;
    }

    return singleRow;
  }

  updateEntityTree(payload: Partial<Payload> | Payload): void {
    const { rowNo, text = null, tag = 'paragraph', opName } = payload;

    if (!this.entityTree[rowNo - 1]) {
      this.entityTree[rowNo - 1] = {
        rowNo,
        text,
        tag,
        htmlContent: this.createSegment(text, tag),
      };
    } else {
      let { text: currentText, tag: currentTag } = this.entityTree[rowNo - 1];

      currentText = opName === 'addText' ? text : currentText;
      currentTag = opName === 'setTag' ? tag : currentTag;

      this.entityTree[rowNo - 1] = {
        ...this.entityTree[rowNo - 1],
        text: currentText,
        tag: currentTag,
        htmlContent: this.createSegment(currentText, currentTag),
      };
    }

    const html = this.buildView();
    this.content$.next(html);
  }

  private buildView(): string {
    let html = '<div style="padding: 0 50px">';

    for (const entity of this.entityTree) {
      const _content = entity?.htmlContent || '';
      html += _content;
    }
    html += '</div>';

    return html;
  }

  private createSegment(text: string, tag: Tag) {
    let segment = '<div style="margin: 15px 0">';

    const { htmlTag, styles } = defaultStyles[tag];

    segment += `<${htmlTag} style="${this.injectInlineStyles(styles)}">${text}</${htmlTag}`;
    segment += '</div>';
    return segment;
  }

  private injectInlineStyles(styles): string {
    if (!styles || !Object.keys(styles).length) {
      return '';
    }

    return Object.entries(styles)
      .map(([k, v]) => `${k}: ${v}`)
      .join(';');
  }
}
