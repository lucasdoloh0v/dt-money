import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.tsx'

import { Amplify } from 'aws-amplify';
import { I18n } from 'aws-amplify/utils';
import { translations } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css'

import CognitoConfig from './cognito';

I18n.putVocabularies(translations);
I18n.setLanguage('pt-BR');

Amplify.configure(CognitoConfig);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
