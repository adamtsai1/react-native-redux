// Dependencies
import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { connect } from 'react-redux';

// Components
import { CardSection } from './common';

// Actions
import * as actions from '../actions';

class LibraryListItem extends Component {
    renderDescription() {
        const { library, librarySelectionId } = this.props;
        if (library.id === librarySelectionId) {
            return (
                <Text>{library.description}</Text>
            )
        }
    }

    render() {
        const { titleStyle } = styles;
        const { id, title } = this.props.library;

        return (
            <TouchableWithoutFeedback onPress={() => this.props.selectLibrary(id)}>
                <View>
                    <CardSection>
                        <Text style={titleStyle}>
                            {title}
                        </Text>
                    </CardSection>
                    {this.renderDescription()}
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15,
    },
};

const mapStateToProps = (state) => {
    return { librarySelectionId: state.librarySelectionId };
};

export default connect(mapStateToProps, actions)(LibraryListItem);
