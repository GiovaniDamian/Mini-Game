import { createContext, useContext } from 'react';
import Cookies from 'js-cookie';

interface Record {
    name: string;
    score: number;
}

interface AppContextProps {
    getCookie: (name: string) => Record[] | undefined;
    setCookie: (name: string, value: Record[]) => void;
}

const AppContext = createContext<AppContextProps | undefined>(undefined);

export const useCookies = (): AppContextProps => {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error('Error', context);
    }
    return context;
};

export default function AppProvider(props: any) {
    const setCookie = (name: string, value: Record[]) => {
        Cookies.set(name, JSON.stringify(value.slice(0, 10)), { expires: 7 });
    };

    const getCookie = (name: string): Record[] | undefined => {
        const value = Cookies.get(name);
        return value ? JSON.parse(value) : undefined;
    };

    return (
        <AppContext.Provider value={{ getCookie, setCookie }} >
            {props.children}
        </AppContext.Provider>
    );
}