import { render } from '@testing-library/react';

import Rate from './rate';

describe('Rate', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Rate />);
    expect(baseElement).toBeTruthy();
  });
});
