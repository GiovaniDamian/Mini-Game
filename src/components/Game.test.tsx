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

        // Verifica se o t�tulo "MINI-GAME" est� presente
        expect(screen.getByText('MINI-GAME')).toBeInTheDocument();

        // Verifica se o bot�o "Iniciar" est� presente
        expect(screen.getByText('Iniciar')).toBeInTheDocument();
    });

    // Aqui voc� pode adicionar mais testes conforme necess�rio para intera��es espec�ficas do jogo
});
