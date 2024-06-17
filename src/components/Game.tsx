import { useGameLogic } from '../hooks/useGameLogic';
import GameBoard from '../components/GameBoard';
import NameInput from '../components/NameInput';
import ScoreBoard from '../components/ScoreBoard';
import Timer from '../components/Timer';

export default function Game () {
    const {
        sequence,
        userInput,
        timeLeft,
        gameStarted,
        playing,
        correct,
        score,
        name,
        bestScores,
        nameSubmitted,
        setName,
        handleNameSubmit,
        startGame,
        resetGame,
        initialTime,
        showNameInput,
        timeIsUp,
    } = useGameLogic();

    const handleNameSubmitAndHide = () => {
        handleNameSubmit();
    };

    return (
        <div className="flex flex-col items-center justify-center h-full w-full text-white" data-testid="game">
            <div className="h-full w-full rounded-lg overflow-clip pl-2">
                <h1 className="text-4xl mb-8 text-white flex justify-center">MINI-GAME</h1>
                {!gameStarted ? (
                    <div className="flex h-2/3 items-center justify-center">
                        <button className="bg-yellow text-white py-2 px-4 rounded p-2 font-bold text-xl hover:border-2 hover:text-black border-white z-20" onClick={startGame}>
                            Iniciar
                        </button>
                    </div>
                ) : (
                    <>
                        {!playing ? (
                                <>
                                    <p className="flex justify-center text-sm">Você deve apertar as teclas conforme a sequência</p>
                                <GameBoard sequence={sequence} userInput={userInput} correct={correct} />
                                <div className="w-full flex flex-col items-center justify-center px-12 overflow-clip m-2">
                                    <Timer timeLeft={timeLeft} initialTime={initialTime} />
                                    <div className="time-left text-xl mt-2">Tempo Restante: {timeLeft} segundos</div>
                                </div>
                            </>
                        ) : (
                            <>
                                {!correct ? (
                                    <>
                                                <div className="flex justify-center text-2xl mb-4">{timeIsUp ? 'Tempo acabou!' : 'Você errou a sequência!'}</div>
                                                {showNameInput && (
                                            <NameInput name={name} setName={setName} handleNameSubmit={handleNameSubmitAndHide} isVisible={showNameInput} />
                                        )}
                                    </>
                                ) : null}
                            </>
                        )}
                        {nameSubmitted && (
                            <>
                                <div className="score m-1 text-xl flex justify-center">Sua Pontuação: {score}</div>
                                <div className="best-score m-1 text-xl">Melhores Pontuações:</div>
                                <ScoreBoard score={score} bestScores={bestScores} numPlayers={3} />
                            </>
                        )}
                        <div className="flex justify-center">
                            <button className={`absolute bottom-1 bg-yellow text-white py-3 px-4 rounded hover:border-2 border-white z-20`} onClick={resetGame}>
                                Reiniciar
                            </button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};
