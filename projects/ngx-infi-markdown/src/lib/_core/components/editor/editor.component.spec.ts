import { Spectator, createComponentFactory } from '@ngneat/spectator';
import { EditorComponent } from './editor.component';

describe('EditorComponent', () => {
  let spectator: Spectator<EditorComponent>;
  const createComponent = createComponentFactory(EditorComponent);

  beforeEach(() => (spectator = createComponent()));

  it('editor should have a class named line', () => {
    expect(spectator.query('div.line')).toHaveClass('line');
  });

  it('editor should have 5 rows at default', () => {
    expect(spectator.queryAll('div.line')).toHaveLength(5);
  });

  it('should indicate a correct active row', () => {
    const firstRow = spectator.query('div.line div[contenteditable]');
    spectator.focus(firstRow);

    let activeRow = spectator.component.activeRow;
    expect(activeRow).toEqual(1);
  });
});
