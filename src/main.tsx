import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { FastCode } from './fast-code/FastCode';

import './index.css';

createRoot( document.getElementById( 'root' )! ).render(
    <StrictMode>
        <FastCode />
    </StrictMode>
);
