import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from '../actions';

class ListItem extends Component {

renderDescription() {
  const { library, selectedLibraryID } = this.props;

  console.log('selectedLibraryID', selectedLibraryID);
  console.log('this lib id', library.id);

  if (library.id === selectedLibraryID) {
      return (<Text>{library.description}</Text>);
  }
}

  render() {
    const { id, title } = this.props.library;
    return (
      <TouchableWithoutFeedback onPress={() => this.props.selectLibrary(id)}>
        <View>
          <CardSection>
            <Text style={styles.textStyle}>{title}</Text>
          </CardSection>
          {this.renderDescription()}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  textStyle: {
    paddingLeft: 15,
    fontSize: 18
  }
};

const mapStateToProps = state => ({ selectedLibraryID: state.selectedLibraryID });

export default connect(mapStateToProps, actions)(ListItem);
