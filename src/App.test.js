import { render, screen } from '@testing-library/react';
import Reservations from './components/Reservations';

test('Check render of Reservations heading', () => {
    render(<Reservations />);
    const headingElement = screen.getByText("Little Lemon");
    expect(headingElement).toBeInTheDocument();
})