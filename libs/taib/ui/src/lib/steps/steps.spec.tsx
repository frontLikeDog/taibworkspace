import { render } from '@testing-library/react';

import Steps from './steps';

describe('Steps', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Steps />);
    expect(baseElement).toBeTruthy();
  });
});
