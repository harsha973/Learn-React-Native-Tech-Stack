import React from 'react';
import {
  View
} from 'react-native';
import { Providers } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';

const App = () => {
  return (
    <Providers store={createStore(reducers)}>
      <View />
    </Providers>
  );
};

export default App;
