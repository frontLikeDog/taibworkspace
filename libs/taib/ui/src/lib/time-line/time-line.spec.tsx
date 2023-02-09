import { render } from '@testing-library/react';

import TimeLine from './time-line';

describe('TimeLine', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TimeLine />);
    expect(baseElement).toBeTruthy();
  });
});
