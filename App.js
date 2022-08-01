import React from 'react';
import {TestScreen} from './src/test-screen';
import {store} from './src/redux/Store';
import {Provider} from 'react-redux';

export default function App() {
  return (
    <Provider store={store}>
      <TestScreen />
    </Provider>
  );
}
