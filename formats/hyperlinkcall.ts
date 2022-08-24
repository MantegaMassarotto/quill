import Inline from '../blots/inline';

class Hyperlinkcall extends Inline {
  static blotName = 'hyperlinkcall';
  static tagName = 'A';

  static create(value) {
    const node = super.create(value) as Element;
    node.setAttribute('href', `#${value}`);
    return node;
  }

  static formats(domNode) {
    return domNode.getAttribute('href');
  }
}

export default Hyperlinkcall;
