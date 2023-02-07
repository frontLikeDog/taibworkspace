import { render } from '@testing-library/react';

import Zippy from './zippy';

describe('Zippy', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Zippy />);
    expect(baseElement).toBeTruthy();
  });
});
