function node_walk(node: Node, func: Function) {
  let result = func(node);
  for (node = node.firstChild; result !== false && node; node = node.nextSibling) result = node_walk(node, func);
  return result;
}

export function getCaretPosition(elem) {
  const sel = window.getSelection() as any;
  let cum_length = [0, 0];

  if (sel.anchorNode == elem) cum_length = [sel.anchorOffset, sel.extentOffset];
  else {
    const nodes_to_find = [sel.anchorNode, sel.extentNode];
    if (!elem.contains(sel.anchorNode) /* || !elem.contains(sel.extentNode)*/) return undefined;
    else {
      let found = [0, 0] as [number | boolean, number | boolean];
      let i;
      node_walk(elem, function (node) {
        for (i = 0; i < 2; i++) {
          if (node == nodes_to_find[i]) {
            found[i] = true;
            if (found[i == 0 ? 1 : 0]) return false;
          }
        }

        if (node.textContent && !node.firstChild) {
          for (i = 0; i < 2; i++) {
            if (!found[i]) cum_length[i] += node.textContent.length;
          }
        }
      });
      cum_length[0] += sel.anchorOffset;
      cum_length[1] += sel.extentOffset;
    }
  }
  if (cum_length[0] <= cum_length[1]) return cum_length;
  return [cum_length[1], cum_length[0]];
}

export function setCaretAtPosition(cp: number, element: HTMLElement): void {
  const caretPosition = Math.min(cp, element.nodeValue.length);

  const range = document.createRange();
  range.setStart(element, caretPosition);
  range.setEnd(element, caretPosition);

  const selection = window.getSelection();
  selection.removeAllRanges();
  selection.addRange(range);
}

export function findAllOccurrencesOfPattern(str: string, pattern: string): Array<number> {
  const indexes = [];
  for (let i = str.indexOf(pattern); i > -1; i = str.indexOf(pattern, i + 1)) {
    indexes.push(i);
  }
  return indexes;
}

export function calculateCorrection(caretPosition: number, indexes: Array<number>, patternLength: number): number {
  let finish = false;
  let i = 0;
  while (!finish) {
    if (!indexes[i] || indexes[i] - i * patternLength >= caretPosition) {
      finish = true;
    } else {
      i++;
    }
  }
  return i;
}

export function calculateCaretPosition(div: HTMLDivElement, ind: number): number {
  let i = ind;
  let cp = 0;
  while (div.childNodes[i] && div.childNodes[i].nodeType === Node.TEXT_NODE) {
    cp += div.childNodes[i].nodeValue.length;
    i++;
  }
  return cp;
}

/**
 * Deep cloning for objects, default JS behavior for the rest of types
 * @param obj: T
 * @returns T
 */
export function objectCloneDeep<T>(obj: T): T {
  const result: T = {} as T;
  for (const [key, value] of Object.entries(obj)) {
    if (Object.prototype.toString.call(value) === '[object Object]') {
      result[key] = objectCloneDeep(value);
    } else {
      result[key] = value;
    }
  }
  return result;
}

function matched<T>(x: T) {
  return {
    on: () => matched(x),
    otherwise: () => x,
  };
}

export function match<T extends string>(x: T) {
  return {
    on: (pred: Function, fn: Function) => (pred(x) ? matched(fn(x)) : match(x)),
    otherwise: (fn: Function) => fn(x),
  };
}
