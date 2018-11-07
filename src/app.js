import React from 'react';
import { View } from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
// import { Header } from './components/common';
import reducer from './reducers';

const App = () => (
    <Provider store={createStore(reducer)} >
      <View />
    </Provider>
  );

export { App };
