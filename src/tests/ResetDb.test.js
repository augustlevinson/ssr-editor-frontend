import { render, screen } from '@testing-library/react';
import Footer from '../components/Footer';

test('renders database reset link', () => {
  render(<Footer />);
  const linkElement = screen.getByText(/Återställ databas/i);
  expect(linkElement).toBeInTheDocument();
});
