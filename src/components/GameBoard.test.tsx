import { render, screen } from '@testing-library/react';
import GameBoard from './GameBoard';

describe('GameBoard Component', () => {
    it('renders GameBoard component correctly', () => {
        const sequence = ['A', 'B', 'C'];
        const userInput = ['', '', ''];
        const correct = false;
        render(<GameBoard sequence={sequence} userInput={userInput} correct={correct} />);

        sequence.forEach((character) => {
            const element = screen.getByText(character);
            expect(element).toBeInTheDocument();
        });
    });
});
