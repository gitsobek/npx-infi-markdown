import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';
import { Entity } from '../models/Entity';
import { Payload } from '../models/Payload';
import { Tag } from '../models/Tag';

export const defaultStyles: { [key in Tag]: any } = {
  'header-lg': {
    htmlTag: 'h1',
    styles: {
      'font-size': '72px',
      'letter-spacing': '.42px',
      'font-weight': '600',
    },
  },
  'header-md': {
    htmlTag: 'h3',
    styles: {
      'font-size': '32px',
      'letter-spacing': '.42px',
      'font-weight': '400',
    },
  },
  paragraph: {
    htmlTag: 'p',
    styles: {
      'font-size': '21px',
      'letter-spacing': '.84px',
    },
  },
  quote: {
    htmlTag: 'div',
    styles: {
      'font-style': 'italic',
      'font-size': '24px',
      color: '#000',
      'text-align': 'left',
      'border-left': '1px solid #000',
      padding: '15px 25px',
    },
  },
};

const defaultEntities: Array<Entity> = [
  {
    rowNo: 1,
    text: 'Hi,',
    tag: 'paragraph',
    htmlContent: '',
  },
  {
    rowNo: 2,
    text: '',
    tag: 'paragraph',
    htmlContent: '',
  },
  {
    rowNo: 3,
    text: 'Have fun while using this editor.',
    tag: 'paragraph',
    htmlContent: '',
  },
  {
    rowNo: 4,
    text: '---',
    tag: 'paragraph',
    htmlContent: '',
  },
  {
    rowNo: 5,
    text: '',
    tag: 'paragraph',
    htmlContent: '',
  },
];

@Injectable({
  providedIn: 'root',
})
export class TreeService {
  private content$: BehaviorSubject<string> = new BehaviorSubject<string>('');
  contentOb$: Observable<string> = this.content$.asObservable().pipe(distinctUntilChanged());

  private entityTree: Entity[] = defaultEntities;

  constructor() {
    this.initDefaultEntityTree();
  }

  get entityValues(): Array<string> {
    return this.entityTree.map((entity: Entity) => entity.text);
  }

  private initDefaultEntityTree(): void {
    this.entityTree.forEach((entity: Entity) => (entity.htmlContent = this.createSegment(entity.text, entity.tag)));
    this.content$.next(this.buildView());
  }

  private updateRowNos(index: number): void {
    for (const entity of this.entityTree.slice(index)) {
      entity.rowNo = ++index;
    }
  }

  getEntityRow(key: number): Entity | null {
    const singleRow = this.entityTree[key - 1];

    if (!singleRow) {
      return null;
    }

    return singleRow;
  }

  insertEntityRow(rowNo: number, rows: Array<Payload>): void {
    this.entityTree.splice(rowNo - 1, 1, ...rows);
    for (const row of rows) {
      this.updateEntityTree({ ...row, opName: 'addText' });
    }
    this.updateRowNos(rowNo - 1);
  }

  removeEntityRow(rowNo: number, textToAppend: string): void {
    this.entityTree.splice(rowNo - 1, 1);
    const upperEntity = this.entityTree[rowNo - 2];
    upperEntity.text += textToAppend;
    this.updateEntityTree({ ...upperEntity, opName: 'addText' });
    this.updateRowNos(rowNo - 1);
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

    for (const entity of this.entityTree.filter((ent) => ent.text !== '')) {
      const _content = entity?.htmlContent || '';
      html += _content;
    }
    html += '</div>';

    return html;
  }

  private createSegment(text: string, tag: Tag) {
    let segment = '<div style="margin: 40px 0">';

    const { htmlTag, styles } = defaultStyles[tag];

    segment += `<${htmlTag} style="${this.injectInlineStyles(styles)}">${text}</${htmlTag}>`;
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
