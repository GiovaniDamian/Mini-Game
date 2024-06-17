import { render, screen, fireEvent } from '@testing-library/react';
import NameInput from './NameInput';

describe('NameInput Component', () => {
    it('renders NameInput component correctly', () => {
        const mockSetName = jest.fn();
        const mockHandleNameSubmit = jest.fn();

        render(<NameInput name="" setName={mockSetName} handleNameSubmit={mockHandleNameSubmit} isVisible={true} />);

        const inputElement = screen.getByPlaceholderText('Digite seu nome');
        expect(inputElement).toBeInTheDocument();

        const submitButton = screen.getByRole('button', { name: /enviar/i });
        expect(submitButton).toBeInTheDocument();
    });

    it('calls handleNameSubmit when submit button is clicked', () => {
        const mockSetName = jest.fn();
        const mockHandleNameSubmit = jest.fn();

        render(<NameInput name="" setName={mockSetName} handleNameSubmit={mockHandleNameSubmit} isVisible={true} />);

        const submitButton = screen.getByRole('button', { name: /enviar/i });

        fireEvent.change(screen.getByPlaceholderText('Digite seu nome'), { target: { value: 'Test Name' } });

        fireEvent.click(submitButton);

        expect(mockHandleNameSubmit).toHaveBeenCalledTimes(1);
    });
});
