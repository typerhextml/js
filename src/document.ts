/* eslint-disable max-classes-per-file */

type ElementTypes = 'document' | 'h1' | 'text';

export class Element {
  type: ElementTypes;
  contents?: Element[];

  constructor(type: ElementTypes) {
    this.type = type;
  }
}

export class Text extends Element {
  text: string;

  constructor(text: string) {
    super('text');
    this.text = text;
  }
}

export class Document extends Element {
  type: ElementTypes = 'document';
  contents: Element[] = [];

  constructor() {
    super('document');
  }
}
