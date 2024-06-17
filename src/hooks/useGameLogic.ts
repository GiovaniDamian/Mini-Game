import { useState, useEffect, useCallback } from 'react';
import { useCookies } from '../data/AppContext';

interface Record {
    name: string;
    score: number;
}

export const useGameLogic = () => {
    const [sequence, setSequence] = useState<string[]>([]);
    const [userInput, setUserInput] = useState<string[]>([]);
    const [timeLeft, setTimeLeft] = useState<number>(10);
    const [initialTime, setInitialTime] = useState<number>(10);
    const [gameStarted, setGameStarted] = useState<boolean>(false);
    const [playing, setPlaying] = useState<boolean>(false);
    const [correct, setCorrect] = useState<boolean>(true);
    const [score, setScore] = useState<number>(0);
    const [round, setRound] = useState<number>(1);
    const [name, setName] = useState<string>('');
    const { getCookie, setCookie } = useCookies();
    const [bestScores, setBestScores] = useState<Record[]>([]);
    const [nameSubmitted, setNameSubmitted] = useState<boolean>(false);
    const [showNameInput, setShowNameInput] = useState<boolean>(false);
    const [timeIsUp, setTimeIsUp] = useState<boolean>(false);

    const correctSound = new Audio('/sounds/correct.mp3');
    const incorrectSound = new Audio('/sounds/incorrect.mp3');

    useEffect(() => {
        generateSequence();
        const savedRecord = getCookie('mini-game-record');
        if (savedRecord) {
            setBestScores(savedRecord);
        }
    }, [getCookie]);

    useEffect(() => {
        if (timeLeft === 0) {
            setCorrect(false);
            setPlaying(true);
            setTimeIsUp(true);
            setShowNameInput(true);
        }
    }, [timeLeft]);

    const generateSequence = useCallback(() => {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789';
        let newSequence = [];
        for (let i = 0; i < 6; i++) {
            newSequence.push(characters[Math.floor(Math.random() * characters.length)]);
        }
        setSequence(newSequence);
    }, []);

    const handleKeyPress = useCallback((event: KeyboardEvent) => {
        const key = event.key.toUpperCase();

        if ((key === 'ENTER' || key === ' ') && !nameSubmitted && gameStarted && !playing) {
            event.preventDefault();
            handleNameSubmit();
            return;
        }

        if (!gameStarted || playing) return;

        const expectedKey = sequence[userInput.length];

        if (key === expectedKey) {
            setUserInput([...userInput, key]);
            setCorrect(true);
            if (userInput.length + 1 === sequence.length) {
                const newScore = timeLeft * round;
                setScore(score + newScore);
                setRound(round + 1);
                generateSequence();
                setUserInput([]);
                setInitialTime(initialTime);
                setTimeLeft(initialTime);
                correctSound.play();
            }
        } else {
            setCorrect(false);
            setPlaying(true);
            setShowNameInput(true);
            incorrectSound.play();
        }
    }, [gameStarted, nameSubmitted, playing, sequence, userInput.length, timeLeft, round, score, initialTime, generateSequence, correctSound, incorrectSound]);

    const updateBestScores = (name: string, currentScore: number) => {
        let newBestScores = [...bestScores, { name, score: currentScore }];
        newBestScores.sort((a, b) => b.score - a.score);
        newBestScores = newBestScores.slice(0, 10);
        setBestScores(newBestScores);
        setCookie('mini-game-record', newBestScores);
    };

    const handleNameSubmit = () => {
        updateBestScores(name, score);
        setNameSubmitted(true);
        setShowNameInput(false);
    };

    useEffect(() => {
        function handleKeyPressWrapper(event: KeyboardEvent) {
            const key = event.key.toUpperCase();
            if (playing && key === 'ENTER') {
                handleKeyPress(event);
            } else if (!playing && event.target instanceof HTMLInputElement && event.key === ' ') {
                event.preventDefault();
            } else if (!playing) {
                handleKeyPress(event);
            }
        }

        window.addEventListener('keydown', handleKeyPressWrapper);
        return () => {
            window.removeEventListener('keydown', handleKeyPressWrapper);
        };
    }, [playing, handleKeyPress]);

    useEffect(() => {
        if (timeLeft > 0 && !playing && gameStarted) {
            const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
            return () => clearTimeout(timer);
        }
    }, [timeLeft, playing, gameStarted]);

    const startGame = () => {
        setGameStarted(true);
        setTimeLeft(initialTime);
        setNameSubmitted(false); 
        setTimeIsUp(false);
    };

    const resetGame = () => {
        setSequence([]);
        setUserInput([]);
        setTimeLeft(initialTime);
        setPlaying(false);
        setCorrect(true);
        setGameStarted(false);
        setScore(0);
        setRound(1);
        setName('');
        setNameSubmitted(false);
        setShowNameInput(false);
        setTimeIsUp(false);
        generateSequence();
    };

    return {
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
    };
};

