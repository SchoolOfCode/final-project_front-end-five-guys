import { test, expect } from '@jest/globals';
import { render, screen } from '@testing-library/react';
import DoctorHome from '../DoctorHome';

test("List of doctor's patients is displayed on doctor homepage", function () {
    render(<DoctorHome />);

    const table = screen.getByRole('table');

    expect(table).toBeVisible();
});

test('Searchbar is displayed', function () {
    render(<DoctorHome />);

    const searchbar = screen.getByRole('textbox');

    expect(searchbar).toBeVisible();
});
