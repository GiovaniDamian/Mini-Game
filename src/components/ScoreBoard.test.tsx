import { render, screen } from '@testing-library/react';
import ScoreBoard from './ScoreBoard';

test('renders scoreboard with correct number of records', () => {
    const bestScores = [
        { name: 'Player1', score: 100 },
        { name: 'Player2', score: 90 },
        { name: 'Player3', score: 80 },
    ];
    render(<ScoreBoard score={0} bestScores={bestScores} numPlayers={3} />);
    const scoreRecords = screen.getAllByRole('listitem');
    expect(scoreRecords).toHaveLength(3);
});
