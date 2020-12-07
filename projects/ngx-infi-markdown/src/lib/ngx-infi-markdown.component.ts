import { Component, OnInit, ViewEncapsulation, Input, Optional, Inject } from '@angular/core';
import { TreeService } from './_core/services/tree.service';
import { UserStyles } from './_core/models/Style';
import { USER_STYLE_CONFIG } from './_core/configs';

@Component({
  selector: 'ngx-infi-markdown',
  templateUrl: './ngx-infi-markdown.component.html',
  styleUrls: ['./ngx-infi-markdown.component.scss'],
})
export class NgxInfiMarkdownComponent implements OnInit {
  @Input() set styles(value: UserStyles) {
    this.treeService.setUserStyles(value, false);
  }

  previewWidth: string;

  constructor(private treeService: TreeService, @Optional() @Inject(USER_STYLE_CONFIG) styleConfig: UserStyles) {
    styleConfig && this.treeService.setUserStyles(styleConfig, true);
  }

  ngOnInit(): void {}

  handleWidthChange(event: any): void {
    const { percWidth } = event;
    this.previewWidth = 100 - percWidth + '%';
  }

  toggleStyles(event: any): void {
    const status = event.target.checked;
    this.treeService.toggleStyles(status);
  }
}
