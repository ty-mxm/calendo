import React from 'react';
import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { createRoot } from 'react-dom/client';

// Enregistrer le composant principal
AppRegistry.registerComponent(appName, () => App);

// Monter l'application dans le DOM
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(<App />);
