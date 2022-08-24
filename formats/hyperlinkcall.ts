import Inline from '../blots/inline';

class Hyperlinkcall extends Inline {
  static blotName = 'hyperlinkcall';
  static tagName = 'A';

  static create(value) {
    const node = super.create(value) as Element;
    const newValue = value.replace(/(#)/gm, '').trim();
    node.setAttribute('href', `#${newValue}`);
    return node;
  }

  static formats(domNode) {
    return domNode.getAttribute('href');
  }
}

export default Hyperlinkcall;
