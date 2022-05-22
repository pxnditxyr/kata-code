import { CodeProvider } from './context';
import { Header } from './components';
import { HomeScreen } from './screens';

export const FastCode = () => {
    return (
        <CodeProvider>
            <Header />
            <main>
                <HomeScreen />
            </main>
        </CodeProvider>
    );
};
