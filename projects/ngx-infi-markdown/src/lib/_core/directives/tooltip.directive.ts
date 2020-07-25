import {
  Directive,
  Input,
  TemplateRef,
  Type,
  ComponentRef,
  ElementRef,
  Injector,
  Renderer2,
  ViewContainerRef,
  ComponentFactoryResolver,
  HostListener,
  OnDestroy,
} from '@angular/core';
import { TooltipComponent } from '../components/tooltip/tooltip.component';

@Directive({
  selector: '[tooltip]',
})
export class TooltipDirective implements OnDestroy {
  @Input('tooltip') content: string | TemplateRef<any> | Type<any>;

  private componentRef: ComponentRef<TooltipComponent>;

  constructor(
    private el: ElementRef,
    private injector: Injector,
    private renderer: Renderer2,
    private vcr: ViewContainerRef,
    private resolver: ComponentFactoryResolver
  ) {}

  ngOnDestroy(): void {
    this.destroy();
  }

  @HostListener('mouseenter')
  onHover() {
    if (this.componentRef) {
      return;
    }

    const factory = this.resolver.resolveComponentFactory(TooltipComponent);
    const injector = Injector.create({
      providers: [
        {
          provide: 'tooltipConfig',
          useValue: {
            host: this.el.nativeElement,
          },
        },
      ],
    });
    this.componentRef = this.vcr.createComponent(factory, 0, injector, this.generateContent());
  }

  @HostListener('mouseout')
  onMouseLeave() {
    this.destroy();
  }

  generateContent(): any[][] {
    if (Object.prototype.toString.call(this.content) === '[object String]') {
      const element = this.renderer.createText(this.content as string);
      return [[element]];
    } else if (this.content instanceof TemplateRef) {
      const context = {};
      const viewRef = this.content.createEmbeddedView(context);
      return [viewRef.rootNodes];
    } else {
      const factory = this.resolver.resolveComponentFactory(this.content as Type<any>);
      const componentRef = factory.create(this.injector);
      return [[componentRef.location.nativeElement]];
    }
  }

  destroy(): void {
    this.componentRef && this.componentRef.destroy();
    this.componentRef = null;
  }
}
