import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { IntlProvider, addLocaleData } from 'react-intl';
/* Locale data */
import fr from 'react-intl/locale-data/fr';
import en from 'react-intl/locale-data/en';
/* Translations */
import translation_fr from './translations/fr.json';
import translation_en from './translations/en.json';

addLocaleData(...fr, ...en);

const translations = {
    'fr': translation_fr,
    'en': translation_en
}
const language = navigator.language.split(/[-_]/)[0]; // Language without region code

ReactDOM.render(
    <IntlProvider locale={language} messages={translations[language]}>
        <App />
    </IntlProvider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
