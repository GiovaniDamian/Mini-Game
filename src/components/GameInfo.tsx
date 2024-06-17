export default function GameInfo () {
    return (
        <div className="flex flex-col items-center justify-center h-full w-full text-white p-4 leading-9">
            <div className="h-full w-full rounded-lg overflow-clip pl-2">
                <h1 className="text-4xl mb-8 text-white flex justify-center">MINI-GAME</h1>
                <div className="flex flex-col items-center justify-center">
                    <h2 className="text-2xl mb-4 underline">Regras e Como Jogar :</h2>
                    <p className="text-center">
                        <strong>Objetivo do Jogo:</strong> Aperte as teclas corretas na sequência exibida para marcar pontos.
                    </p>
                    <br/>
                    <p className="text-center">
                        <strong>Como Jogar:</strong>
                    </p>
                    <ol className="text-left list-decimal pl-6 mb-4">
                        <li>Inicie o jogo clicando no botão "Iniciar". Uma sequência de letras (A-Z) e números(1-9) será gerada automaticamente.</li>
                        <li>Pressione as teclas correspondentes à sequência na ordem correta.</li>
                        <li><strong className="underline">Sua pontuação é calculada com base no tempo restante multiplicado pelo número da rodada atual.</strong></li>
                        <li>Você tem um tempo limitado para completar cada rodada.</li>
                    </ol>
                    <br/>
                    <p className="text-center">
                        <strong>Melhores Pontuações:</strong> As melhores pontuações são salvas e exibidas no placar.
                    </p>
                    <p className="text-center">
                        <strong>Reiniciar o Jogo:</strong> Clique em "Reiniciar" a qualquer momento para começar um novo jogo.
                    </p>
                    <br/>
                    <p className="text-center">Divirta-se e boa sorte!</p>
                </div>
            </div>
        </div>
    );
};

