import React, { Component } from 'react';
import { Text } from 'react-native';
import { CardSection } from './common';

class LibraryListItem extends Component {

  render() {
    console.log(this.props.library);
    return (
      <CardSection>
        <Text style={styles.textStyle}>{this.props.library.title}</Text>
      </CardSection>
    );
  }
}

const styles = {
  textStyle: {
    paddingLeft: 15,
    fontSize: 18
  }
};

export default LibraryListItem;
