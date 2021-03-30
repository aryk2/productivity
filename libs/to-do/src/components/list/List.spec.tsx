import React from 'react';
import { render } from '@testing-library/react';
import { ListStyled } from './List.stories';

describe('List', () => {
  it('should render the List component', () => {
    
    const {
      container,
      // debug,
    } = render(<ListStyled />);
    // debug()
    expect(container).toBeTruthy();
  });
});
