// src/components/Game.test.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Game from './Game';

jest.mock('../hooks/useGameLogic', () => ({
    useGameLogic: () => ({
        sequence: [],
        userInput: '',
        timeLeft: 60,
        gameStarted: false,
        playing: false,
        correct: false,
        score: 0,
        name: '',
        bestScores: [],
        nameSubmitted: false,
        setName: jest.fn(),
        handleNameSubmit: jest.fn(),
        startGame: jest.fn(),
        resetGame: jest.fn(),
        initialTime: 60,
        showNameInput: false,
        timeIsUp: false,
    }),
}));

describe('Game Component', () => {
    it('renders Game component correctly', () => {
        render(<Game />);

        // Verifica se o título "MINI-GAME" está presente
        expect(screen.getByText('MINI-GAME')).toBeInTheDocument();

        // Verifica se o botão "Iniciar" está presente
        expect(screen.getByText('Iniciar')).toBeInTheDocument();
    });

    // Aqui você pode adicionar mais testes conforme necessário para interações específicas do jogo
});
