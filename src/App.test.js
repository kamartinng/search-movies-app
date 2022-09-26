import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  
  const headings = screen.getAllByRole('heading', {level: 1})
  expect(headings).toHaveLength(2);

  const headingValues = headings.map((heading) => heading.textContent);
  expect(headingValues).toEqual(["Movies", "Favorites"])
});
