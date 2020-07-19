import { Tag } from './Tag';

export interface Payload {
  rowNo: number;
  text: string;
  tag: Tag;
  opName: 'addText' | 'addRow' | 'removeRow' | 'setTag';
}
