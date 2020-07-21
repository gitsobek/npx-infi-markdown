import { Component, OnInit, ViewEncapsulation, Input, Output } from '@angular/core';
import { Tag } from './_core/models/Tag';
import { TreeService } from './_core/services/tree.service';

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

      <div class="switcher">
        <label class="switch">
          <input (change)="toggleStyles($event)" type="checkbox" />
          <span class="slider round"></span>
        </label>
      </div>
    </div>
  `,
  styleUrls: ['./ngx-infi-markdown.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class NgxInfiMarkdownComponent implements OnInit {
  @Input() set styles(value: { [key in Tag]: any }) {
    this.treeService.setStyles(value);
  }

  previewWidth: string;
  editorWidth: number;

  constructor(private treeService: TreeService) {}

  ngOnInit(): void {}

  handleWidthChange(event: any): void {
    const { percWidth, pxWidth } = event;
    this.editorWidth = pxWidth;
    this.previewWidth = 100 - percWidth + '%';
  }

  toggleStyles(event: any): void {
    const status = event.target.checked;
    this.treeService.toggleStyles(status);
  }
}
