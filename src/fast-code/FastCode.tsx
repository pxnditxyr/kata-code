import { CodeProvider } from './context';
import { HomeScreen } from './screens';
import { Navbar } from './components/navbar/Navbar';

export const FastCode = () => {
    return (
        <CodeProvider>
            <main className="h-screen">
                <Navbar />
                <HomeScreen />
            </main>
        </CodeProvider>
    );
};
