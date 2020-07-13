import { Component, OnInit, ElementRef, Self } from '@angular/core';

@Component({
  selector: 'editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss'],
})
export class EditorComponent implements OnInit {
  rows: Range;
  activeRow: number;

  constructor(@Self() private hostElement: ElementRef) {
    const height = this.hostElement.nativeElement.offsetHeight;
    console.log(height);
    this.rows = range(0, Math.round(height / 20));
    console.log(this.rows);
  }

  ngOnInit(): void {}

  onFocus(rowNo: number) {
    this.activeRow = rowNo;
  }

  onTextTyped(event: InputEvent, rowNo: number) {}
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
