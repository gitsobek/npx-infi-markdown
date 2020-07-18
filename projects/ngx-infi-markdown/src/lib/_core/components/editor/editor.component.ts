import { Component, OnInit, QueryList, ViewChildren, AfterViewInit } from '@angular/core';
import { TreeService } from '../../services/tree.service';
import { Payload } from '../../models/Payload';
import { Tag } from '../../models/Tag';
import { getCaretPosition, setCaretAtPosition } from '../../utils';

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
    this.rows = range(1, treeService.entityValues.length);
  }

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.divs.changes.subscribe((data: any) => {
      data._results[this.activeRow - 1].nativeElement.focus();
    });
    this.repaintEditor();
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

  onFocus(rowNo: number): void {
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
