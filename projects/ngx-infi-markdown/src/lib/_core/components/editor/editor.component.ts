import { Component, OnInit, QueryList, ViewChildren, AfterViewInit } from '@angular/core';
import { Payload } from '../../models/Payload';
import { TreeService } from '../../services/tree.service';
import { getCaretPosition } from '../../utils';
import { Tag } from '../../models/Tag';

@Component({
  selector: 'editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss'],
})
export class EditorComponent implements OnInit, AfterViewInit {
  rows: Range;
  activeRow: number;

  @ViewChildren('editableDiv')
  divs: QueryList<any>;

  constructor(private treeService: TreeService) {
    this.rows = range(1, 5);
  }

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.divs.changes.subscribe((data: any) => {
      data._results[this.activeRow - 1].nativeElement.focus();
    });
  }

  onFocus(rowNo: number) {
    this.activeRow = rowNo;
  }

  onTextTyped(event, rowNo: number): void {
    const payload = {
      rowNo,
      text: event.target.innerHTML,
      opName: 'addText',
    } as Partial<Payload>;

    this.treeService.updateEntityTree(payload);
  }

  onKeyPressed(event, rowNo: number): boolean {
    let { high } = this.rows;
    const rowData = this.treeService.getEntityRow(rowNo);

    if (event.key === 'Enter') {
      const [, end] = getCaretPosition(event.target);

      if ((!rowData || (rowData && rowData.text.length === end)) && this.activeRow === high) {
        const newCount = ++high;
        this.rows = range(1, newCount);
        this.activeRow = newCount;

        return false;
      }
    }
  }

  onKeyEntered(event, rowNo: number): void {
    let { high } = this.rows;
    const rowData = this.treeService.getEntityRow(rowNo);

    if (event.key === 'Backspace') {
      if (high === 1 || this.activeRow === 1) {
        return;
      }

      if (!rowData || (rowData && rowData.text === '')) {
        const newCount = --high;
        this.rows = range(1, newCount);
        this.activeRow -= 1;

        return;
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

    const payload = {
      rowNo: this.activeRow,
      tag: tagName,
      opName: 'setTag',
    } as Partial<Payload>;

    this.treeService.updateEntityTree(payload);
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
