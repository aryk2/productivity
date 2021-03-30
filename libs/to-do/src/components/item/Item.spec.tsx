import React from 'react';
import { render } from '@testing-library/react';
import { ItemStyled } from './Item.stories';

describe('Item', () => {
  it('should render the Item component', () => {

    const {
      container,
      // debug,
    } = render(<ItemStyled />);
    // debug()
    expect(container).toBeTruthy();
  });
});
