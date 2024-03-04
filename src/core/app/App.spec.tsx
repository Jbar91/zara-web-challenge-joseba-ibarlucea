import { render } from '@testing-library/react';
import App from './App';

it('renders App component', () => {
  const app = render(<App />);

  expect(app).toBeTruthy();
});
