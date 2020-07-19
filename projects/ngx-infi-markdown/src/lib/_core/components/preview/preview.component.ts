import { Component, OnInit, Input } from '@angular/core';
import { TreeService } from '../../services/tree.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss'],
})
export class PreviewComponent implements OnInit {
  content$: Observable<string>;

  constructor(private treeService: TreeService) {
    this.content$ = this.treeService.contentOb$;
  }

  ngOnInit(): void {}
}
