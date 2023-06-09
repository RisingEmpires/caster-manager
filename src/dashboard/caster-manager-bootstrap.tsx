import React from 'react';
import { createRoot } from 'react-dom/client';
import { CasterManager } from './CasterManager';

const root = createRoot(document.getElementById('root')!);
root.render(<CasterManager />);
