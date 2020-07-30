import { NgModule, ModuleWithProviders } from '@angular/core';
import { NgxInfiMarkdownComponent } from './ngx-infi-markdown.component';
import { EditorComponent } from './_core/components/editor/editor.component';
import { PreviewComponent } from './_core/components/preview/preview.component';
import { ResizableDirective } from './_core/directives/resizable.directive';
import { CommonModule } from '@angular/common';
import { SanitizeHtmlPipe } from './_core/pipes/sanitizeHtml.pipe';
import { MinToolbarComponent } from './_core/components/min-toolbar/min-toolbar.component';
import { TooltipDirective } from './_core/directives/tooltip.directive';
import { TooltipComponent } from './_core/components/tooltip/tooltip.component';
import { UserStyles } from './_core/models/Style';
import { USER_STYLE_CONFIG } from './_core/configs';
import { StorageService, LocalStorageService, SessionStorageService } from './_core/services/storage.service';
import { match } from './_core/utils';

type Config = Partial<{
  styles: UserStyles;
  storageType: 'none' | 'localStorage' | 'sessionStorage';
}>;

// @dynamic
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
export class NgxInfiMarkdownModule {
  static forRoot({ styles = null, storageType = 'none' }: Config): ModuleWithProviders {
    return {
      ngModule: NgxInfiMarkdownModule,
      providers: [
        {
          provide: USER_STYLE_CONFIG,
          useValue: styles,
        },
        {
          provide: StorageService,
          useFactory: () => {
            return match(storageType)
              .on(
                (x: string) => x === 'localStorage',
                () => new LocalStorageService()
              )
              .on(
                (x: string) => x === 'sessionStorage',
                () => new SessionStorageService()
              )
              .otherwise((x: string) => null);
          },
        },
      ],
    };
  }
}
