import Inline from '../blots/inline';

class Hyperlink extends Inline {
  static blotName = 'hyperlink';
  static tagName = 'SPAN';

  static create(value) {
    const node = super.create(value) as Element;
    node.setAttribute('id', this.sanitize(value));
    return node;
  }

  static formats(domNode) {
    return domNode.getAttribute('id');
  }

  static sanitize(url: string) {
    return url;
  }
}

export default Hyperlink;
