interface NameInputProps {
    name: string;
    setName: (name: string) => void;
    handleNameSubmit: () => void;
    isVisible: boolean;
}

export default function NameInput({ name, setName, handleNameSubmit, isVisible }: NameInputProps) {
    if (!isVisible) {
        return null; // Retorna null se isVisible for falso para não renderizar o componente
    }

    return (
        <div className="name-input mt-2 z-20">
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Digite seu nome"
                className="bg-yellow text-white py-2 px-4 rounded"
            />
            <button
                onClick={() => {
                    handleNameSubmit();
                }}
                className="bg-yellow text-white py-2 px-4 rounded ml-2"
            >
                Enviar
            </button>
        </div>
    );
};

