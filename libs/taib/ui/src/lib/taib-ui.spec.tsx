import { render } from '@testing-library/react';

import TaibUi from './taib-ui';

describe('TaibUi', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TaibUi />);
    expect(baseElement).toBeTruthy();
  });
});
