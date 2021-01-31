import React from 'react';
import Main from './app/components/Main';
import {Provider} from './app/components/Context'

export default function App() {

  return (
    <Provider>
      <Main/>
    </Provider>
  );
}