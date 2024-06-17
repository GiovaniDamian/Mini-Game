import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import Game from './Game';

const mockUseGameLogic = jest.fn();

jest.mock('../hooks/useGameLogic', () => ({
    useGameLogic: () => mockUseGameLogic(),
}));

describe('Game Component', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('starts the game when the "Iniciar" button is clicked', () => {
        const startGameMock = jest.fn();

        mockUseGameLogic.mockReturnValue({
            sequence: ['A', 'B', 'C', 'D'],
            userInput: [],
            timeLeft: 10,
            gameStarted: false,
            playing: false,
            correct: true,
            score: 0,
            name: '',
            bestScores: [],
            nameSubmitted: false,
            setName: jest.fn(),
            handleNameSubmit: jest.fn(),
            startGame: startGameMock,
            resetGame: jest.fn(),
            initialTime: 60,
            showNameInput: false,
            timeIsUp: false,
        });

        render(<Game />);

        act(() => {
            fireEvent.click(screen.getByText('Iniciar'));
        });

        expect(startGameMock).toHaveBeenCalled();
    });

});
