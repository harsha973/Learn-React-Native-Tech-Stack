import React, { Component } from 'react';
import {
   Text,
   TouchableWithoutFeedback,
   View,
   LayoutAnimation,
   NativeModules,
   Platform
} from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from '../actions';

class ListItem extends Component {

componentDidMount() {
    if (Platform.OS === 'android') {
      const { UIManager } = NativeModules;
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
}

componentWillUpdate() {
  LayoutAnimation.spring();
}

renderDescription() {
  const { library, expanded } = this.props;

  if (expanded) {
      return (
        <CardSection>
          <Text style={styles.descriptionStyle}>{library.description}</Text>
        </CardSection>
      );
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
  },
  descriptionStyle: {
    paddingLeft: 15
  }
};

const mapStateToProps = (state, ownProps) => {
  const expanded = state.selectedLibraryID === ownProps.library.id;
  return ({ expanded });
};

export default connect(mapStateToProps, actions)(ListItem);
