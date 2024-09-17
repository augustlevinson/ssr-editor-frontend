import { render, screen } from '@testing-library/react';
import Footer from '../components/Footer';
// import Documents from '../views/Documents';

test('renders database reset link', () => {
  render(<Footer />);
  const linkElement = screen.getByText(/Återställ databas/i);
  expect(linkElement).toBeInTheDocument();
});

// test('Component should have an <h2>', async () => {
//   const response = render(<Documents />);
//   const heading = screen.getByRole('heading', { level: 1 });
//   expect(heading).toBeInTheDocument();
// });