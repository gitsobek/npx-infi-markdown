import { Directive, ElementRef, OnInit, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[appResizable]',
})
export class ResizableDirective implements OnInit {
  @Input() resizableGrabWidth = 3;
  @Input() resizableMinWidth = 100;

  dragging = false;
  windowWidth: number;
  containerWidth: number;

  constructor(private el: ElementRef) {
    this.containerWidth = this.el.nativeElement.clientWidth;
  }

  ngOnInit(): void {
    this.windowWidth = window.innerWidth;
    this.el.nativeElement.style['border-right'] = this.resizableGrabWidth + 'px solid #DCDCDC';
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.windowWidth = window.innerWidth;
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
  }

  private isInDragRegion(evt: MouseEvent): boolean {
    return this.el.nativeElement.clientWidth - evt.clientX + this.el.nativeElement.offsetLeft < this.resizableGrabWidth;
  }
}
