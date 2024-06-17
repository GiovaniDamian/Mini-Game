import React, { useState } from 'react';
import Modal from 'react-modal';
import Game from './Game';
import ScoreBoard from './ScoreBoard';
import { useGameLogic } from '../hooks/useGameLogic';
import GameInfo from './GameInfo';

if (process.env.NODE_ENV !== 'test') {
    Modal.setAppElement('#root');
}

export default function App() {
    const { score, bestScores } = useGameLogic();
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => setModalIsOpen(true);
    const closeModal = () => setModalIsOpen(false);

    return (
        <div className="flex flex-row bg-gradient-to-b from-home_yellow to-home_black text-center justify-center items-center h-screen text-zinc-400">
            <div className='flex flex-col items-center h-4/5 w-1/4 bg-dark m-6 border-8 border-gray_light rounded-xl'>
                <div
                    className="flex justify-center text-lg items-center mt-4 border-gray-light rounded-full h-24 w-24 border-4 border-yellow hover:bg-yellow hover:text-black cursor-pointer"
                    onClick={openModal}
                >
                    Play
                </div>
                <div className="best-score m-1 text-xl underline decoration-yellow my-8">Melhores Pontuações:</div>
                <ScoreBoard score={score} bestScores={bestScores} numPlayers={10} />
            </div>
            <div className="h-4/5 w-1/2 border-8 m-4 border-gray_light rounded-xl mb-4 h-1/3 bg-dark">
                <GameInfo />
            </div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                className="fixed inset-0 flex items-center justify-center"
                overlayClassName="fixed inset-0 bg-black bg-opacity-75 z-50"
                contentLabel="Game Modal"
            >
                <div className="relative flex flex-col bg-modal rounded-lg shadow-lg w-2/3 h-2/4 overflow-auto border-8 border-gray_light">
                    <div className="relative flex items-center justify-between py-4 mt-2 h-12">
                        <button onClick={closeModal} className="absolute top-0 right-2 flex items-center justify-center w-8 h-8 text-gray-500 hover:text-gray-700 focus:outline-none z-20">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <Game />
                </div>
                <img src="./royal_crown.png" alt="Decorative Border" className="absolute top-0 w-1/3 -mt-20 z-10" />
            </Modal>
        </div>
    );
}
