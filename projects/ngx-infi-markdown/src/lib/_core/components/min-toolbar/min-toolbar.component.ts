import { Component, Input, Output, EventEmitter, Renderer2, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Tag } from '../../models/Tag';
import { TreeService } from '../../services/tree.service';
import { Payload } from '../../models/Payload';
import { Entity } from '../../models/Entity';

@Component({
  selector: 'min-toolbar',
  templateUrl: './min-toolbar.component.html',
  styleUrls: ['./min-toolbar.component.scss'],
})
export class MinToolbarComponent implements AfterViewInit {
  @Input()
  activeRow: number;

  @Input()
  activeTag: Tag;

  @Output()
  onTagSelect: EventEmitter<any> = new EventEmitter<any>();

  @ViewChild('h1')
  hPrimaryEl: ElementRef<any>;

  @ViewChild('h2')
  hSecondaryEl: ElementRef<any>;

  @ViewChild('h3')
  hTertiaryEl: ElementRef<any>;

  @ViewChild('h4')
  hQuaternaryEl: ElementRef<any>;

  @ViewChild('paragraph')
  paragraphEl: ElementRef<any>;

  @ViewChild('quote')
  quoteEl: ElementRef<any>;

  @ViewChild('ol')
  olEl: ElementRef<any>;

  @ViewChild('ul')
  ulEl: ElementRef<any>;

  tagsMap: Map<string, ElementRef>;

  constructor(private renderer: Renderer2, private treeService: TreeService) {
    this.tagsMap = new Map<string, ElementRef>();
  }

  ngAfterViewInit(): void {
    this.tagsMap
      .set('primaryHeader', this.hPrimaryEl)
      .set('secondaryHeader', this.hSecondaryEl)
      .set('tertiaryHeader', this.hTertiaryEl)
      .set('quaternaryHeader', this.hQuaternaryEl)
      .set('orderedList', this.olEl)
      .set('unorderedList', this.ulEl)
      .set('paragraph', this.paragraphEl)
      .set('quote', this.quoteEl);

    const { tag = null } = this.treeService.getEntityRow(this.activeRow);

    if (tag) {
      this.renderer.addClass(this.tagsMap.get(tag).nativeElement, 'tag--selected');
    }
  }

  refreshView(rowData: Entity) {
    if (this.activeTag && this.activeTag !== rowData.tag) {
      this.renderer.removeClass(this.tagsMap.get(this.activeTag).nativeElement, 'tag--selected');
    }

    this.activeTag = rowData.tag;
    this.onTagSelect.next({
      tagName: this.activeTag,
      rowTagName: rowData.tag,
    });

    this.renderer.addClass(this.tagsMap.get(rowData.tag).nativeElement, 'tag--selected');
  }

  onTagSet(tagName: Tag) {
    if (!this.activeRow) {
      return;
    }

    this.activeTag = tagName;

    const { tag = null } = this.treeService.getEntityRow(this.activeRow);

    const payload = {
      rowNo: this.activeRow,
      tag: tagName,
      opName: 'setTag',
    } as Partial<Payload>;

    this.treeService.updateEntityTree(payload);

    if (tag) {
      this.renderer.removeClass(this.tagsMap.get(tag).nativeElement, 'tag--selected');
    }

    this.renderer.addClass(this.tagsMap.get(tagName).nativeElement, 'tag--selected');

    this.onTagSelect.next({
      tagName,
      rowTagName: tag,
    });
  }
}
