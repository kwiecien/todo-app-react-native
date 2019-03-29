import React from 'react';
import { StyleSheet, View } from 'react-native';
import ListView from './components/ListView';
import firebase from 'react-native-firebase';

interface Props {
}

interface State {
}

export default class App extends React.Component<Props, State> {
    render() {
        firebase.auth()
            .signInAnonymously()
            .then(credential => {
                if (credential) {
                    console.log('default app user ->', credential.user.toJSON());
                }
            });
        return (
            <View>
                <ListView key='list-view' />
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
