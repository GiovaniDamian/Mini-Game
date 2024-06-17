import { render, screen } from '@testing-library/react';
import Timer from './Timer';

test('renders timer with correct width based on timeLeft', () => {
    render(<Timer timeLeft={30} initialTime={60} />);
    const timerBar = screen.getByRole('progressbar');
    expect(timerBar).toHaveStyle('width: 50%'); // Ajuste conforme a lógica real do seu Timer
});
