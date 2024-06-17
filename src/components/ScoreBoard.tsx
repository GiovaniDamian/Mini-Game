interface Record {
    name: string;
    score: number;
}

interface ScoreBoardProps {
    score: number;
    bestScores: Record[];
    numPlayers: number;
}

export default function ScoreBoard({ score, bestScores, numPlayers }: ScoreBoardProps) {
    return (
            <ul>
                {bestScores.slice(0, numPlayers).map((record, index) => (
                    <li key={index} className="text-white flex leading-9">
                        #{index + 1}: {record.name} - {record.score} pts
                    </li>
                ))}
            </ul>
    );
};
