import { NgModule } from '@angular/core';
import { NgxInfiMarkdownComponent } from './ngx-infi-markdown.component';
import { EditorComponent } from './_core/components/editor/editor.component';
import { PreviewComponent } from './_core/components/preview/preview.component';
import { ResizableDirective } from './_core/directives/resizable.directive';
import { CommonModule } from '@angular/common';
import { SanitizeHtmlPipe } from './_core/pipes/sanitizeHtml.pipe';
import { MinToolbarComponent } from './_core/components/min-toolbar/min-toolbar.component';
import { TooltipDirective } from './_core/directives/tooltip.directive';
import { TooltipComponent } from './_core/components/tooltip/tooltip.component';

@NgModule({
  declarations: [
    NgxInfiMarkdownComponent,
    EditorComponent,
    PreviewComponent,
    ResizableDirective,
    TooltipDirective,
    SanitizeHtmlPipe,
    TooltipComponent,
    MinToolbarComponent,
  ],
  imports: [CommonModule],
  exports: [NgxInfiMarkdownComponent],
})
export class NgxInfiMarkdownModule {}
