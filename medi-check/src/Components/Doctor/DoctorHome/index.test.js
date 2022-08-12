import { test, expect } from '@jest/globals';
import { render, screen } from '@testing-library/react';
import DoctorHome from '../DoctorHome';
import PendingDialog from '../../../MUIcomponents/PendingDialog/pending';

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

test('Pending prescriptions button is displayed', function () {
    render(<DoctorHome />);
    const { queryByTestId } = render(<PendingDialog />);

    // const prescriptionButton = screen.getByAltText('Pending Prescriptions');
    // prescriptionButton.getByText('Pending Prescriptions')
    expect(screen.queryByTestId('pending')).toBeVisible();
});
