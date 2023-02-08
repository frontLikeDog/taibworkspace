import { render } from '@testing-library/react';

import Testimonial from './testimonial';

describe('Testimonial', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Testimonial />);
    expect(baseElement).toBeTruthy();
  });
});
