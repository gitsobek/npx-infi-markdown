import {
  Component,
  OnInit,
  QueryList,
  ViewChildren,
  AfterViewInit,
  ViewChild,
  ElementRef,
  Renderer2,
  Input,
  ViewContainerRef,
  ComponentFactoryResolver,
  ComponentFactory,
  ComponentRef,
  OnDestroy,
  Attribute,
} from '@angular/core';
import { TreeService } from '../../services/tree.service';
import { Payload } from '../../models/Payload';
import { Tag } from '../../models/Tag';
import { getCaretPosition, setCaretAtPosition } from '../../utils';
import { MinToolbarComponent } from '../min-toolbar/min-toolbar.component';
import { Subject, Observable } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss'],
})
export class EditorComponent implements OnInit, AfterViewInit, OnDestroy {
  rows: Range;
  width: number;
  activeTag: Tag;
  activeRow: number;
  lastSegmentOffset: number;
  hiddenSegments: boolean;
  openedToolbar: boolean;
  componentRef: ComponentRef<MinToolbarComponent>;

  private toolbarState$: Subject<boolean> = new Subject<boolean>();
  toolbarStateObs$: Observable<boolean> = this.toolbarState$.asObservable().pipe(distinctUntilChanged());

  @ViewChildren('editableDiv')
  divs: QueryList<any>;

  @ViewChild('h1')
  hPrimaryEl: ElementRef<any>;

  @ViewChild('h2')
  hSecondaryEl: ElementRef<any>;

  @ViewChild('h3')
  hTertiaryEl: ElementRef<any>;

  @ViewChild('h4')
  hQuaternaryEl: ElementRef<any>;

  @ViewChild('paragraph')
  paragraphEl: ElementRef<any>;

  @ViewChild('quote')
  quoteEl: ElementRef<any>;

  @ViewChild('toolbar')
  toolbar: ElementRef<any>;

  @ViewChild('toolbarContainer', { read: ViewContainerRef }) container;

  @Input() set currWidth(value: number) {
    this.hiddenSegments = value < this.lastSegmentOffset + 10;

    if (!this.hiddenSegments) {
      this.openedToolbar = this.hiddenSegments;
      this.toolbarState$.next(this.openedToolbar);
    }
  }

  tagsMap: Map<string, ElementRef>;

  constructor(
    private renderer: Renderer2,
    private treeService: TreeService,
    private resolver: ComponentFactoryResolver
  ) {
    this.rows = range(1, treeService.entityValues.length);
    this.tagsMap = new Map<string, ElementRef>();
  }

  ngOnInit(): void {
    this.toolbarStateObs$.subscribe((isOpened: boolean) => {
      this.toggleToolbar(isOpened);
    });
  }

  ngAfterViewInit(): void {
    const toolbarChildren = Array.from(this.toolbar.nativeElement.children);
    const lastSegment = toolbarChildren[toolbarChildren.length - 1] as HTMLElement;
    this.lastSegmentOffset = lastSegment.clientWidth + lastSegment.offsetLeft;

    this.tagsMap
      .set('primaryHeader', this.hPrimaryEl)
      .set('secondaryHeader', this.hSecondaryEl)
      .set('tertiaryHeader', this.hTertiaryEl)
      .set('quaternaryHeader', this.hQuaternaryEl)
      .set('paragraph', this.paragraphEl)
      .set('quote', this.quoteEl);

    this.divs.changes.subscribe((data: any) => {
      data._results[this.activeRow - 1].nativeElement.focus();
    });
    this.repaintEditor();
  }

  ngOnDestroy(): void {
    this.componentRef.destroy();
  }

  private repaintEditor(): void {
    const entityValues = this.treeService.entityValues;
    this.rows = range(1, entityValues.length);

    setTimeout(() => {
      this.divs.forEach((div, i) => {
        div.nativeElement.innerHTML = entityValues[i] || '';
      });
    });
  }

  onFocus(event, rowNo: number): void {
    const rowData = this.treeService.getEntityRow(rowNo);
    const caretPosition = rowData.text.length;

    this.activeRow = rowNo;

    if (caretPosition > 0) {
      setTimeout(() => {
        setCaretAtPosition(caretPosition, event.target);
      });
    }

    if (this.openedToolbar) {
      this.componentRef.instance.activeRow = rowNo;
      this.componentRef.instance.activeTag = this.activeTag;
      this.componentRef.instance.refreshView(rowData);
      return;
    }

    const prevActive = this.activeTag;
    this.activeTag = rowData.tag;

    if (this.activeTag && this.activeTag !== rowData.tag) {
      this.renderer.removeClass(this.tagsMap.get(this.activeTag).nativeElement, 'tag--selected');
    }

    if (prevActive && prevActive !== this.activeTag) {
      this.renderer.removeClass(this.tagsMap.get(prevActive).nativeElement, 'tag--selected');
    }

    this.renderer.addClass(this.tagsMap.get(rowData.tag).nativeElement, 'tag--selected');
  }

  onPaste(event, rowNo: number, ref): void {
    event.preventDefault();

    const clipboardData = event.clipboardData;
    const pastedData = clipboardData.getData('Text');

    ref.innerHTML = pastedData;

    const payload = {
      rowNo,
      text: pastedData,
      opName: 'addText',
    } as Partial<Payload>;

    this.treeService.updateEntityTree(payload);
  }

  onTextTyped(event, rowNo: number): void {
    const payload = {
      rowNo,
      text: event.target.innerHTML,
      opName: 'addText',
    } as Partial<Payload>;

    this.treeService.updateEntityTree(payload);
  }

  onKeyPressed(event, rowNo: number): void {
    const rowData = this.treeService.getEntityRow(rowNo);

    if (event.key === 'Enter') {
      const [, end] = getCaretPosition(event.target);

      if (!event.shiftKey) {
        event.preventDefault();

        const beginText = rowData.text.slice(0, end);
        const endText = rowData.text.slice(end);

        const rows: Array<Payload> = [
          {
            rowNo,
            text: beginText,
            tag: rowData.tag,
            opName: 'addRow',
          },
          {
            rowNo: rowNo + 1,
            text: endText,
            tag: rowData.tag,
            opName: 'addRow',
          },
        ];

        this.treeService.insertEntityRow(rowNo, rows);
        this.activeRow = rowNo + 1;

        this.repaintEditor();
      }
    }
  }

  onKeyEntered(event, rowNo: number): void {
    const { high } = this.rows;
    const rowData = this.treeService.getEntityRow(rowNo);

    if (event.key === 'Backspace') {
      const [, end] = getCaretPosition(event.target);

      if (high === 1 || this.activeRow === 1 || end > 0) {
        return;
      }

      const previousRowData = this.treeService.getEntityRow(rowNo - 1);
      const caretPosition = previousRowData.text.length;

      const text = rowData.text === '<br>' ? '' : rowData.text;
      this.treeService.removeEntityRow(rowNo, text);
      this.activeRow -= 1;

      this.repaintEditor();

      const divAffected = this.divs.find((x, i) => i === rowNo - 2).nativeElement;

      if (caretPosition > 0) {
        setTimeout(() => {
          setCaretAtPosition(caretPosition, divAffected);
        });
      }
    } else if (event.key === 'Delete') {
      const [, end] = getCaretPosition(event.target);

      if (end !== rowData.text.length) {
        return;
      }

      const nextRowData = this.treeService.getEntityRow(rowNo + 1);
      const caretPosition = rowData.text.length;

      const text = nextRowData.text === '<br>' ? '' : nextRowData.text;
      this.treeService.removeEntityRow(rowNo + 1, text);

      this.repaintEditor();

      const divAffected = this.divs.find((x, i) => i === rowNo - 1).nativeElement;

      if (caretPosition > 0) {
        setTimeout(() => {
          setCaretAtPosition(caretPosition, divAffected);
        });
      }
    } else if (event.key === 'ArrowUp') {
      if (this.activeRow === 1) {
        return;
      }

      this.activeRow -= 1;
      this.divs.toArray()[this.activeRow - 1].nativeElement.focus();
    } else if (event.key === 'ArrowDown') {
      if (this.activeRow === high) {
        return;
      }

      this.activeRow += 1;
      this.divs.toArray()[this.activeRow - 1].nativeElement.focus();
    }
  }

  onTagSet(tagName: Tag) {
    if (!this.activeRow) {
      return;
    }

    this.activeTag = tagName;

    const { tag = null } = this.treeService.getEntityRow(this.activeRow);

    const payload = {
      rowNo: this.activeRow,
      tag: tagName,
      opName: 'setTag',
    } as Partial<Payload>;

    this.treeService.updateEntityTree(payload);

    if (tag) {
      this.renderer.removeClass(this.tagsMap.get(tag).nativeElement, 'tag--selected');
    }

    this.renderer.addClass(this.tagsMap.get(tagName).nativeElement, 'tag--selected');
  }

  openToolbar(hamburgerRef: any): void {
    hamburgerRef.classList.toggle('change');
    this.openedToolbar = !this.openedToolbar;
    this.toolbarState$.next(this.openedToolbar);
  }

  toggleToolbar(isOpened: boolean): void {
    if (!this.activeRow) {
      return;
    }

    if (!isOpened) {
      this.container.clear();
    } else {
      const factory: ComponentFactory<MinToolbarComponent> = this.resolver.resolveComponentFactory(MinToolbarComponent);
      this.componentRef = this.container.createComponent(factory);

      this.componentRef.instance.activeRow = this.activeRow;

      this.componentRef.instance.onTagSelect.subscribe(({ tagName, rowTagName }) => {
        const prevActive = this.activeTag;
        this.activeTag = tagName;

        if (this.activeTag && this.activeTag !== rowTagName) {
          this.renderer.removeClass(this.tagsMap.get(rowTagName).nativeElement, 'tag--selected');
        }

        if (prevActive && prevActive !== this.activeTag) {
          this.renderer.removeClass(this.tagsMap.get(prevActive).nativeElement, 'tag--selected');
        }

        this.renderer.addClass(this.tagsMap.get(this.activeTag).nativeElement, 'tag--selected');
      });
    }
  }
}

export class Range implements Iterable<number> {
  constructor(public readonly low: number, public readonly high: number, public readonly step: number = 1) {}

  *[Symbol.iterator]() {
    for (let i = this.low; i <= this.high; i += this.step) {
      yield i;
    }
  }
}

function range(low: number, high: number) {
  return new Range(low, high);
}
