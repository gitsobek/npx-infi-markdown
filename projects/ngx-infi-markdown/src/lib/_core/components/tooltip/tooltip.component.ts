import { Component, OnInit, Inject, ViewChild, ElementRef } from '@angular/core';

@Component({
  template: `
    <div #container class="tooltip-container" [ngStyle]="{ top: top, left: left }">
      <ng-content></ng-content>
    </div>
  `,
  styleUrls: ['./tooltip.component.scss'],
})
export class TooltipComponent implements OnInit {
  top: string;
  left: string;

  @ViewChild('container', { static: true })
  containerEl: ElementRef;

  constructor(@Inject('tooltipConfig') private config) {}

  ngOnInit(): void {
    const { offsetTop, offsetLeft } = this.config.host;
    const { clientHeight } = this.containerEl.nativeElement;

    const spaceUp = Math.min(clientHeight, 30);

    this.top = `${offsetTop - spaceUp - 8}px`;
    this.left = `${offsetLeft}px`;
  }
}
