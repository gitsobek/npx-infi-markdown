import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'ngx-infi-markdown',
  template: `
    <div class="row">
      <editor appResizable [resizableMinWidth]="250" class="child"></editor>

      <preview class="child"></preview>
    </div>
  `,
  styleUrls: ['./ngx-infi-markdown.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class NgxInfiMarkdownComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
