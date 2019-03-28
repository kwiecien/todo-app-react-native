import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Hello } from './components/Hello';
import { CheckBox, SearchBar } from 'react-native-elements';

interface Props {
}

interface State {
}

export default class App extends React.Component<Props, State> {
    render() {
        return (
            <View style={styles.container}>
                <SearchBar />
                <CheckBox checked={true} />
                <Hello name="Krzysztof" enthusiasmLevel={1} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
