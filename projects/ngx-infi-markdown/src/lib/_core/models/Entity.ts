import { Tag } from './Tag';

export interface Entity {
  rowNo: number;
  text: string;
  tag: Tag;
  htmlContent?: string;
}
