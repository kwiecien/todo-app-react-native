import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Hello } from './components/Hello';
import { CheckBox, SearchBar } from 'react-native-elements';
import ListViewItem from './components/ListViewItem';
import TodoModel from './models/TodoModel';

interface Props {
}

interface State {
}

export default class App extends React.Component<Props, State> {
    private todo: TodoModel = {
        task: "task",
        status: true,
        user: "KK"
    };

    render() {
        return (
            <View>
                <SearchBar />
                <ListViewItem data={this.todo} dataIndex={0} onCompletedChange={data => (data)} />
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
