import React from 'react';
import { View } from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Header } from './components/common';
import reducer from './reducers';
import LibraryList from './components/LibraryList';

const App = () => (
    <Provider store={createStore(reducer)} >
      <View>
        <Header headerText="Tech stack" />
        <LibraryList style={styles.listStyle} />
      </View>
    </Provider>
  );

const styles = {
  listStyle: {
    flex: 1
  }
};

export { App };
