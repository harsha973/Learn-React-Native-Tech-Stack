import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';
import ListItem from './ListItem';

class LibraryList extends Component {

  renderItem(library) {
    console.log('library passed is ', library.title);
    return (
      <ListItem library={library} />
    );
  }

  render() {
    return (
      <FlatList
        data={this.props.libraries}
        renderItem={({ item }) => this.renderItem(item)}
        keyExtractor={(library) => library.id.toString()}
      />
    );
  }
}

const mapStateToProps = state => ({ libraries: state.libraries });

export default connect(mapStateToProps)(LibraryList);
