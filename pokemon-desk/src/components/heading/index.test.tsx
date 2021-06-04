/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import Heading from './index';

describe('Heading', () => {
  let container: Element | null = null;

  beforeEach(() => {
    container = window.document.createElement('div');
    window.document.body.appendChild(container);
  });

  afterEach(() => {
    if (container !== null) {
      unmountComponentAtNode(container);
      container.remove();
      container = null;
    }
  });

  it('render', () => {
    act(() => {
      render(<Heading />, container);
    });

    expect(container?.innerHTML).toBeDefined();
    expect(container?.querySelector('h1')).not.toBeNull();
  });

  it('render with children', () => {
    act(() => {
      render(<Heading>Children</Heading>, container);
    });

    expect(container?.textContent).toBe('Children');
  });

  it('render with type', () => {
    act(() => {
      render(<Heading type="h2" />, container);
    });

    expect(container?.querySelector('h2')).not.toBeNull();
  });
});
