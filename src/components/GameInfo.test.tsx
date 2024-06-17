import { render, screen } from '@testing-library/react';
import GameInfo from './GameInfo';

describe('GameInfo Component', () => {
    it('renders GameInfo component correctly', () => {
        render(<GameInfo />);

        // Verifica se os elementos chave e o texto s�o renderizados corretamente
        const titleElement = screen.getByText('MINI-GAME');
        expect(titleElement).toBeInTheDocument();

        const objectiveElement = screen.getByText('Objetivo do Jogo:');
        expect(objectiveElement).toBeInTheDocument();
    });
});
