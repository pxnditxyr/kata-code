import {
    BrowserRouter,
    Routes,
    Route
} from 'react-router-dom';
import { Navbar } from '../components/navbar/Navbar';

import { HomeScreen, AboutScreen, ContactScreen, NotFoundScreen } from '../screens';

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={ <HomeScreen /> } />
                <Route path="/about" element={ <AboutScreen /> } />
                <Route path="/contact" element={ <ContactScreen /> } />
                <Route path="*" element={ <NotFoundScreen /> } />
            </Routes>
        </BrowserRouter>
    );
};
