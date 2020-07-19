import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'ngx-infi-markdown',
  template: `
    <div class="row">
      <editor
        appResizable
        #appResizable="appResizable"
        [resizableMinWidth]="250"
        [currWidth]="editorWidth"
        (onWidthChange)="handleWidthChange($event)"
        class="child"
      ></editor>

      <preview [style.width]="previewWidth" class="child"></preview>
    </div>
  `,
  styleUrls: ['./ngx-infi-markdown.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class NgxInfiMarkdownComponent implements OnInit {
  previewWidth: string;
  editorWidth: number;

  constructor() {}

  ngOnInit(): void {}

  handleWidthChange(event: any): void {
    const { percWidth, pxWidth } = event;
    this.editorWidth = pxWidth;
    this.previewWidth = 100 - percWidth + '%';
  }
}
