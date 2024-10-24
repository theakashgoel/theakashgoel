import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Counter from './Counter'; // Adjust the path as needed

describe('Counter Component', () => {

    test('initial count is 0', () => {
         render(<Counter />);
        const valueElement = screen.getByTestId('value');
        expect(valueElement).toHaveTextContent('0');
    });

    test('increments count when "+" button is clicked', () => {
         render(<Counter />);
        const incrementButton = screen.getByTestId('increment-btn');
        fireEvent.click(incrementButton);
        const valueElement = screen.getByTestId('value');
        expect(valueElement).toHaveTextContent('1');
    });

    test('decrements count when "-" button is clicked', () => {
         render(<Counter />);
        const decrementButton = screen.getByTestId('decrement-btn');
        fireEvent.click(decrementButton);
        const valueElement = screen.getByTestId('value');
        expect(valueElement).toHaveTextContent('-1');
    });

    test('resets count when "Reset" button is clicked', () => {
         render(<Counter />);
        const incrementButton = screen.getByTestId('increment-btn');
        fireEvent.click(incrementButton); // Increment to 1
        const resetButton = screen.getByTestId('reset-btn');
        fireEvent.click(resetButton);
        const valueElement = screen.getByTestId('value');
        expect(valueElement).toHaveTextContent('0');
    });
});
