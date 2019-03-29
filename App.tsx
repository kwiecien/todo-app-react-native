import React from 'react';
import { StyleSheet, View } from 'react-native';
import ListView from './components/ListView';

interface Props {
}

interface State {
}

export default class App extends React.Component<Props, State> {
    render() {
        return (
            <View>
                <ListView key='list-view'/>
            </View>
        );
    }
}

const styles = StyleSheet.create({ // TODO change
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
