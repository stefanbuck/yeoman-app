import createComponent from '../helpers/createComponent.js';
import GridItem from '../../src/renderer/components/grid-item.jsx';

function mockContent() {
  const contentDiv = window.document.createElement('div');
  contentDiv.id = 'content';
  contentDiv.style.height = '800px';
  window.document.body.appendChild(contentDiv);
}

function dismissContent() {
  window.document.body.removeChild(
    window.document.getElementById('content')
  );
}

describe('Grid Item', () => {
  let renderOutput;

  beforeEach(() => {
    mockContent();
    renderOutput = createComponent(
      GridItem,
      {
        name: 'generator-angular',
        version: '1.2.3',
        icon: 'angular.png'
      }
    );
  });

  afterEach(dismissContent);

  it('should build container element', () => {
    expect(
      renderOutput.props.children[0].type
    ).toBe(
      'div'
    );
  });

  it('should set callback functions', () => {
    [
      'onMouseOver',
      'onMouseOut',
      'onClick'
    ].forEach(fnName => {
      expect(
        typeof renderOutput.props[fnName]
      ).toBe(
        'function'
      );
    });
  });

  it('should have a background element', () => {
    expect(
      renderOutput.props.children[1].type
    ).toBe(
      'figure'
    );
    expect(
      renderOutput.props.children[1].props.style.backgroundImage
    ).toBe(
      'url(angular.png)'
    );
    expect(
      renderOutput.props.children[1].props.style.backgroundSize
    ).toBe(
      'cover'
    );
  });

  it('should have a title element', () => {
    expect(
      renderOutput.props.children[2].type
    ).toBe(
      'h3'
    );
  });

  it('should show correct grid item name', () => {
    expect(
      renderOutput.props.children[2].props.children
    ).toBe(
      'Angular'
    );
  });
});
