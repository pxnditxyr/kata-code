import { CodeProvider } from './context';
import { AppRouter } from './routers/AppRouter';

export const FastCode = () => {
    return (
        <>
            <CodeProvider>
                <main className="h-screen">
                    <AppRouter />
                </main>
            </CodeProvider>
        </>
    );
};
