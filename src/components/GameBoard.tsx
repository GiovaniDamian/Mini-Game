interface GameBoardProps {
    sequence: string[];
    userInput: string[];
    correct: boolean;
}

export default function GameBoard({ sequence, userInput, correct }: GameBoardProps) {
    return (
        <div className="flex flex-row justify-center m-2" data-testid="game-board">
            {sequence.map((character, index) => (
                <div
                    key={index}
                    className={`w-16 h-16 m-2 flex items-center justify-center border-4 rounded-xl bg-dark font-bold ${userInput[index] === character
                        ? 'bg-yellow text-black border-none'
                        : index === userInput.length
                            ? 'border-yellow'
                            : 'border-zinc-800'
                        } rounded`}
                >
                    {character}
                </div>
            ))}
        </div>
    );
};