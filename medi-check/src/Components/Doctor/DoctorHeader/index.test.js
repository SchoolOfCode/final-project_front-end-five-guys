import { test, expect } from '@jest/globals';
import { render, screen } from '@testing-library/react';
// import Header from '../Header';
import Header from './index';

test("The text on the button is 'Clear List'", function () {
    render(<Header name='Smith' />);

    const doctorHeader = screen.getByRole('heading');

    expect(doctorHeader.textContent).toBe('Hello, Dr Smith');
});

test("The logo is displayed on page'", function () {
    render(<Header />);

    const logo = screen.getByAltText('medi-check logo');

    expect(logo).toHaveAttribute('alt', 'medi-check logo');
});
