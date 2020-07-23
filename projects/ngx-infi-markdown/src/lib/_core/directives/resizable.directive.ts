import { Directive, ElementRef, OnInit, Input, HostListener, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[appResizable]',
  exportAs: 'appResizable',
})
export class ResizableDirective implements OnInit {
  @Input()
  resizableGrabWidth = 2;

  @Input()
  resizableMinWidth = 100;

  @Output()
  onWidthChange: EventEmitter<any> = new EventEmitter<any>();

  dragging = false;
  windowWidth: number;
  containerWidth: number;

  constructor(public el: ElementRef) {
    this.containerWidth = this.el.nativeElement.clientWidth;
  }

  ngOnInit(): void {
    this.windowWidth = window.innerWidth;
    this.el.nativeElement.style['border-right'] = this.resizableGrabWidth + 'px dashed #D3DAEA';
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.windowWidth = window.innerWidth;
    this.setWidth(this.windowWidth / 2 - this.el.nativeElement.offsetLeft);
  }

  @HostListener('document:mousemove', ['$event'])
  onDrag(event: MouseEvent) {
    if (!this.dragging) {
      return;
    }

    if (this.containerWidth < event.clientX) {
      return;
    }

    this.setWidth(event.clientX - this.el.nativeElement.offsetLeft);
    event.stopPropagation();
  }

  @HostListener('document:mouseup', ['$event'])
  onMouseUp(event: MouseEvent) {
    if (!this.dragging) {
      return;
    }

    this.dragging = false;
    event.stopPropagation();
  }

  @HostListener('mousedown', ['$event'])
  onMouseDown(event: MouseEvent) {
    if (this.isInDragRegion(event)) {
      this.dragging = true;
      event.stopPropagation();
    }
  }

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    if (this.isInDragRegion(event) || this.dragging) {
      this.el.nativeElement.style.cursor = 'col-resize';
    } else {
      this.el.nativeElement.style.cursor = 'default';
    }
  }

  private setWidth(width: number): void {
    const newWidth = Math.max(this.resizableMinWidth, width);
    const percWidth = (newWidth / this.windowWidth) * 100;

    this.el.nativeElement.style.width = percWidth + '%';
    this.onWidthChange.emit({ percWidth, pxWidth: width });
  }

  private isInDragRegion(evt: MouseEvent): boolean {
    return this.el.nativeElement.clientWidth - evt.clientX + this.el.nativeElement.offsetLeft < this.resizableGrabWidth;
  }
}
